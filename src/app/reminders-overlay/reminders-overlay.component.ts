import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, distinctUntilChanged, repeat } from 'rxjs/operators';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/message.service';
import { UtilityService } from 'src/services/utility.service';
import { Form } from '../classes/Form';
import { Reminder } from '../classes/Reminder';


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


  reminderObject: Reminder;
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
      this.documentTypeFormDictionary = {
        'reminder': this.Forms.R_reminderForm
      }
    // Initialised createForm
    this.utilityService.managerTypeSubject.subscribe((resp)=>{
      this.dynamicFormDictionaryGenerator();
      this.dynamicFormGroupGenerator();
    });
    this.utilityService.reminderSubject.subscribe(resp=>{this.reminderObject=resp;});
    }

    ngOnChanges(): void {
      // this.dynamicFormGroupGenerator();
    }

    dynamicFormDictionaryGenerator(){
      if(this.managerType === "Reminder" ){
        this.documentTypeFormDictionary = {
          'reminder': this.Forms.R_reminderForm
        }
      }

    }

  dynamicFormGroupGenerator() {
    console.log("Generating dynamic forms\n",
    "Create form:",
    this.createForm,
    "\nEdit form",
    this.editForm);

     this.createForm = this.formBuilder.group(this.documentTypeFormDictionary[this.documentType]);
     this.editForm = this.formBuilder.group(this.documentTypeFormDictionary[this.documentType]);
     this.deleteForm = this.formBuilder.group(this.documentTypeFormDictionary[this.documentType]);
 }


 setInactive(): void {

  switch (this.formType) {

      case this.formTypes[0]:
        this.utilityService.setReminderCreateFormInActive();
        this.utilityService.reminderCreateSubject
        .subscribe( bool => {this.active = bool;});
      break;

      case this.formTypes[1]:
        this.utilityService.setReminderEditFormInActive();
        this.utilityService.reminderEditSubject
        .subscribe(bool=>{this.active = bool;});
      break;

      case this.formTypes[2]:
        this.utilityService.setReminderDeleteFormInactive();
        this.utilityService.reminderDeleteSubject
        .subscribe( bool => {this.active = bool;});
      break;

    default:
      break;
  }
}

  // This functions result is used to evaluate what Input tag gets shown
  evaluateKey(key:string):string {
    // return the date string, if the key includes the word 'date' in it
    if( new RegExp('date').test(key) ) {
      return 'datetime-local';
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

  updateEditForm(attributeName, inputValue): void{
    let re:RegExp = /mm\/dd\/yyyy\,/
    this.editForm.value[attributeName] = inputValue;
    for(const key in this.reminderObject){
      if(this.editForm.value[key] === ""|| re.test(this.editForm.value[key]) )
      this.editForm.value[key] = this.reminderObject[key];
    }
  }

  deleteReminder(id){
    this.apiService
    .documentRequest('reminder','delete',id,null)
    .subscribe(error =>{console.error(error) });
  }
  refreshList(){
    this.apiService
    .documentRequest('reminder','get',null,null)
    .subscribe((resp:{results:Reminder[]})=>
    { this.utilityService.updateReminderList(resp.results)});
  }
onSubmit(actionType:string): void {
  switch (actionType) {
    case this.formTypes[0]:
      this.apiService
      .documentRequest(
        this.documentType,
        "post",
        null,
        JSON.stringify(this.createForm.getRawValue()),'Reminder')
      .subscribe(
        () => {
          this.messageService.pushSuccess("Successfully submitted!");
          this.setInactive();
          // this.refreshList();
        }, (errorResponse:HttpErrorResponse) =>{
          this.messageService.pushError(errorResponse.error)
      });
    break;

    case this.formTypes[1]:
      this.apiService
      .documentRequest(
        this.documentType,"patch",this.reminderObject.id,this.editForm.value,'Reminder')
      .subscribe(
        () => {
          this.messageService.pushSuccess("Successfully submitted!");
          // this.setInactive();
          this.refreshList()
        }, (errorResponse:HttpErrorResponse) =>{
          this.messageService.pushError(errorResponse.error)
      });
    break;

    case this.formTypes[2]:


      this.apiService
      .documentRequest(this.documentType,'delete',this.reminderObject.id, null,'Reminder')
      .subscribe(
        () => {
          this.messageService.pushSuccess("Successfully submitted!");
          this.utilityService.updateReminderList(
            this.utilityService
            .reminderListSubject.value
            .filter((reminder:Reminder)=> reminder.id != this.reminderObject.id))
          this.setInactive();},
        (errorResponse:HttpErrorResponse) => {
          this.messageService.pushError(errorResponse.error)},
        ()=> this.refreshList());
    break;
  }
  this.refreshList();

}

}
