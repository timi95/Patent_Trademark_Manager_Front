import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/message.service';
import { UtilityService } from 'src/services/utility.service';
import { Form } from '../classes/Form';

@Component({
  selector: 'r-overlay',
  templateUrl: './reminders-overlay.component.html',
  styleUrls: ['./reminders-overlay.component.css']
})
export class RemindersOverlayComponent implements OnInit {
  @Input("active") active: boolean;
  @Input("documentType") documentType: string;
  @Input("formType") formType?: string;
  @Input("updateValue") editeableObject?: any;
  @Input("managerType") managerType:string;

  @ViewChild('edit', { static: true }) input: ElementRef;
  // @ViewChild('create', { static: true }) createInput: ElementRef;

  detailsObject: any = JSON.parse(localStorage.getItem('detailsObject'));
  formTypes:string[] = ['create','update','delete'];

  
  documentTypeFormDictionary:any = {};

  createForm: FormGroup;
  editForm: FormGroup;
  deleteForm: FormGroup;
  Forms = new Form();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    public utilityService: UtilityService,
    private messageService: MessageService ) {
    }

    ngOnInit(): void {
      // Initialised createForm
      this.utilityService.managerTypeSubject.subscribe(resp=>{
  
        if(resp === "Reminders"){
          this.documentTypeFormDictionary = {
            'reminder': this.Forms.R_reminderForm
          }
        }

        this.dynamicFormGroupGenerator();
      });
    }
    ngOnChanges(): void {
      this.dynamicFormGroupGenerator();
    }


  dynamicFormGroupGenerator() {   
    if( this.formTypes[0].includes(this.formType) )
    this.createForm = this.formBuilder.group(this.documentTypeFormDictionary[this.documentType]);

    if( this.formTypes[1].includes(this.formType) )
    this.editForm = this.formBuilder.group(this.documentTypeFormDictionary[this.documentType]);

    if( this.formTypes[2].includes(this.formType) )
    this.deleteForm = this.formBuilder.group(this.documentTypeFormDictionary[this.documentType]);  
 }


 setInactive(): void {
  switch (this.formType) {

      case this.formTypes[0]:
        this.utilityService.setReminderCreateFormInActive();
        this.utilityService.reminderCreateSubject.subscribe( bool => {
          this.active = bool;          
        });
      break;        

    default:
      break;
  }
}

  // This functions result is used to evaluate what Input tag gets shown
  evaluateKey(key:string):string {
    // return the date string, if the key includes the word 'date' in it
    if( new RegExp('date').test(key) ) {
      return 'date';
    } else if( key == 'id') {
      return 'id';
    } else {
      return 'text';
    }
  }
  
  shunOverlay($event){
    if($event.target.classList.contains("overlay")){
      this.setInactive();
    }
  }


onSubmit(actionType:string): void {
    
  switch (actionType) {
    case this.formTypes[0]:
      this.apiService
      .documentRequest(
        this.documentType,
        "post",
         0,
        JSON.stringify(this.createForm.getRawValue()),
        localStorage.getItem('managerType'))
      .subscribe(
        (response) => {
          this.messageService.pushSuccess("Successfully submitted!");
          this.setInactive();
        },
        (err) => {
          console.log(err);
          this.messageService.pushError(err);}
      );
      
      break;

  }
}

}
