import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { FormControl, FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ApiService } from "src/services/api.service";
import { MessageService } from "src/services/message.service";
import { UtilityService } from 'src/services/utility.service';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';


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
  @Input("managerType") managerType:string;

  @ViewChild('edit', { static: true }) input: ElementRef;
  // @ViewChild('create', { static: true }) createInput: ElementRef;

  detailsObject: any = JSON.parse(localStorage.getItem('detailsObject'));
  formTypes:string[] = ['create','update','delete'];

  
  documentTypeFormDictionary:any = {};

  createForm: FormGroup;
  editForm: FormGroup;
  deleteForm: FormGroup;
  // name = new FormControl("");

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

      if(resp =="Patent_manager"){
        this.documentTypeFormDictionary = {
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
      }
      if(resp == "Trademark_manager"){
        this.documentTypeFormDictionary = {
          'assignment-merger-action':{
            assignment_instruction_date: new FormControl('', [Validators.required]),
            assignment_instruction_month: new FormControl('', [Validators.required]),
            assignee: new FormControl('', [Validators.required]),
            assignee_address: new FormControl('', [Validators.required]),
            assignor: new FormControl('', [Validators.required]),
            assignor_address: new FormControl('', [Validators.required]),
            clerk_assigning: new FormControl('', [Validators.required]),
            date_abuja_instructed_assignment: "",
            date_assignment_certificate_received: "",
            date_facillitation_assignment_cert_sent: "",
            date_facillitation_assignment_cert_sent_sent: "",
            official_fee_assignment: new FormControl('', [Validators.required]),
            status_assignment_registrations: new FormControl('', [Validators.required]),
          },
          "amendement-action": {
            ammendement_instruction_date: "",
            date_ammendement_instruction_received: "",
            nature_of_amendement: new FormControl('', [Validators.required]),
            date_amending_clerk_instructed: "",
            status_of_amendement: new FormControl('', [Validators.required]),
            date_amendement_received: ""
          },
        };
      }
      console.log('resp',resp,'dictionary state: ',this.documentTypeFormDictionary,'document type: ',this.documentType);
      this.dynamicFormGroupGenerator();
    });
  }
  ngOnChanges(): void {
    this.ngOnInit();
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
  shunOverlay($event){
    if($event.target.classList.contains("overlay")){
      this.setInactive();
    }
  }
  setInactive(): void {
    // event.stopPropagation();

    switch (this.formType) {

      case this.formTypes[0]:
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
    this.router.navigate([`detail/${this.detailsObject.id}`]);
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
            
            this.messageService.pushSuccess("Successfully submitted!");
            this.setInactive();
            console.log(response);
            // window.location.reload();
            this.router.navigate([`detail/${this.detailsObject.id}`]);
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
            
            this.messageService.pushSuccess("Successfully Updated! ");
            this.setInactive();
            // console.log("response =>",resp);
            this.editeableObject = this.editForm.value;
            // window.location.reload();
            this.router.navigate([`detail/${this.detailsObject.id}`]);
            
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
            
            this.messageService.pushSuccess(`Successfully deleted ${this.detailsObject.id}!`);
            localStorage.setItem('detailsObject',JSON.stringify({})); 
            this.setInactive();
            // window.location.reload();
            this.router.navigate([`detail/${this.detailsObject.id}`]);
          }, (err) =>{
            this.messageService.pushError(`Could not delete: ${err}`)
          });
      break;
      default:
        break;
    }
  }

}


