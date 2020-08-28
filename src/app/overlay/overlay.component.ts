import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { FormControl, FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ApiService } from "src/services/api.service";
import { MessageService } from "src/services/message.service";
import { UtilityService } from 'src/services/utility.service';
import { JsonPipe } from '@angular/common';


@Component({
  selector: "overlay",
  templateUrl: "./overlay.component.html",
  styleUrls: ["./overlay.component.css"],
})
export class OverlayComponent implements OnInit {
  @Input("active") active: boolean;
  @Input("documentType") documentType: string;
  @Input("formType") formType?: string;
  @Input("updateValue") editeableObject?: any;

  @ViewChild('edit', { static: true }) input: ElementRef;

  detailsObject: any = JSON.parse(localStorage.getItem('detailsObject'));
  formTypes:string[] = ['create','update','delete'];

  documentTypeFormDictionary = {
    'search-action':{},
    'renewal-action':{},
    'registration':{},
    'patent-particulars':{},
    'procurement':{},
    'ctc':{},
    'change-name':{},
    'change-address':{},
    'assignment-merger-action':{
      assignment_instruction_date: new FormControl('', [Validators.required]),
      assignment_instruction_month: new FormControl('', [Validators.required]),
      date_abuja_instructed_assignment: "",
      clerk_assignment: new FormControl('', [Validators.required]),
      status_assignment_registrations: new FormControl('', [Validators.required]),
      assignor: new FormControl('', [Validators.required]),
      assignor_address: new FormControl('', [Validators.required]),
      assignee: new FormControl('', [Validators.required]),
      assignee_address: new FormControl('', [Validators.required]),
      date_assignment_certificate_received: ""
    },
    "amendement-action": {
      date_amendment_instruction_received: "",
      nature_of_amendment: new FormControl('', [Validators.required]),
      amending_clerk: new FormControl('', [Validators.required]),
      date_amending_clerk_instructed: "",
      status_of_amendment: new FormControl('', [Validators.required]),
      date_amendment_received: ""
    } 
  }

  createForm: FormGroup;
  editForm: FormGroup;
  deleteForm: FormGroup;
  // name = new FormControl("");

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    public utilityService: UtilityService,
    private messageService: MessageService ) {
    }
    

  ngOnInit(): void {
    // Initialised createForm
    this.dynamicFormGroupGenerator();
  }
  ngOnChanges(): void {
    this.ngOnInit();
    // console.log("This documentType changed to this ==>",this.documentType, this.createForm);
    // console.log("formType has changed ==>",this.formType, this.editForm);
    
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

  dynamicFormGroupGenerator() {
    this.createForm = this.formBuilder.group(this.documentTypeFormDictionary[this.documentType]);
    this.editForm = this.formBuilder.group(this.documentTypeFormDictionary[this.documentType]);
    this.deleteForm = this.formBuilder.group(this.documentTypeFormDictionary[this.documentType]);   
 }
  print(value?:any):void{
    console.log(value);
  }
  updateEditForm(attributeName, inputValue): void{
    this.editForm.value[attributeName] = inputValue;
    for(const key in this.detailsObject){
      if(this.editForm.value[key] === ""||this.editForm.value[key] == "mm/dd/yyyy")
      this.editForm.value[key] = this.detailsObject[key];
    }

  }
  setInactive(): void {
    /*
      this is buggy because 
      the data is not always fetched 
      in time for the window reload to 
      reflect the relevant change in data 
    */

    switch (this.formType) {

      case this.formTypes[0]:
        this.refreshObject();
        this.utilityService.setModalFormInactive();
        this.utilityService.modalFormActive.subscribe( bool => {
          this.active = bool;
        });
        break;
      
      case this.formTypes[1]:
        this.refreshObject();
        this.utilityService.setDetailEditFormInactive();
        this.utilityService.detailEditFormActive.subscribe( bool => {
          this.active = bool;          
        });
        break;

      case this.formTypes[2]:
        this.utilityService.setDetailDeleteFormInactive();
        this.utilityService.detailDeleteFormActive.subscribe( bool => {
          this.active = bool;          
        });
        break;

      default:
        break;
    }
  }

  refreshObject(){
    //  refresh the detailsObject once overlay is closed
    this.apiService
    .patentDocumentRequest(this.documentType,'get',this.detailsObject.id)
    .subscribe(resp => { 
    localStorage.setItem('detailsObject',JSON.stringify(resp)); 
    // reload page once work is done
    window.location.reload();
    });
  }

  onSubmit(actionType:string): void {
    
    switch (actionType) {
      case this.formTypes[0]:
        this.apiService
        .patentDocumentRequest(
          this.documentType,
          "post",
           0,
          JSON.stringify(this.createForm.getRawValue()))
        .subscribe(
          (response) => {
            this.messageService.clear();
            this.messageService.pushSuccess("Successfully submitted!");
            this.setInactive();
            console.log(response);
            window.location.reload();
          },
          (err) => {
            console.log(err);
            this.messageService.pushError(err);
        });
        
        break;
    

      case this.formTypes[1]:
           this.apiService
          .patentDocumentRequest(
            this.documentType,
            "patch", 
            this.detailsObject.id, 
            this.editForm.value )
          .subscribe( resp => {
            this.messageService.clear();
            this.messageService.pushSuccess("Successfully Updated! ");
            this.setInactive();
            // console.log("response =>",resp);
            this.editeableObject = this.editForm.value;
            // window.location.reload();
            
          }, (err) => {
            this.messageService.pushError(`Could not update: ${err}`);
          } );
      break;

      case this.formTypes[2]:
          this.apiService
          .patentDocumentRequest(
            this.documentType,
            "delete" ,
            this.detailsObject.id,
            this.deleteForm.value)
          .subscribe( resp => {
            this.messageService.clear();
            this.messageService.pushSuccess(`Successfully deleted ${this.editeableObject.id}!`);
            this.setInactive();
            localStorage.setItem('detailsObject',JSON.stringify({})); 
            window.location.reload();
          }, (err) =>{
            this.messageService.pushError(`Could not delete: ${err}`)
          });
      break;
      default:
        break;
    }
  }

}


