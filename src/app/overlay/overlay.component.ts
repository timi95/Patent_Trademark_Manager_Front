import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { FormControl, FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ApiService } from "src/services/api.service";
import { MessageService } from "src/services/message.service";
import { UtilityService } from 'src/services/utility.service';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Form } from '../classes/Form';


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

      if(resp =="Patent_manager"){
        this.documentTypeFormDictionary = {
          'search-action':this.Forms.P_search_action,
          'renewal-action':this.Forms.P_renewal_action,
          'registration':this.Forms.P_registration,
          'patent-particulars':this.Forms.P_patent_particulars,
          'procurement':this.Forms.P_procurement,
          'ctc':this.Forms.P_ctc,
          'change-name':this.Forms.P_change_name,
          'change-address': this.Forms.P_change_address,
          'assignment-merger-action':this.Forms.P_assignment_merger_action,
          "amendment-action": this.Forms.P_amendment_action,
        }
      }
      if(resp == "Trademark_manager"){
        this.documentTypeFormDictionary = {
          "amendment-action": this.Forms.T_amendment_action,
          'assignment-merger-action':this.Forms.T_assignment_merger_action,
          'certificate-procurement-action':this.Forms.T_certificate_procurement_action,
          'change-name-address-action':this.Forms.T_change_name_address_action,
          'profile':this.Forms.T_profile,
          'reclassification-action':this.Forms.T_reclassification_action,
          'registration-action':this.Forms.T_registration_action,
          'renewal-action':this.Forms.T_renewal_action,
          'search-action':this.Forms.T_search_action,
        };
      }

      this.dynamicFormGroupGenerator();
    });
  }
  ngOnChanges(): void {
    this.dynamicFormGroupGenerator();
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
    console.debug(this.editForm);
    
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
        // this.refreshObject();
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
    .patentDocumentRequest(
    this.documentType,
    'get',
    this.detailsObject.id,
    this.editForm.value,
    localStorage.getItem('managerType'))
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
          JSON.stringify(this.createForm.getRawValue()),
          localStorage.getItem('managerType'))
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
            this.editForm.value,
            localStorage.getItem('managerType') )
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
            this.deleteForm.value,
            localStorage.getItem('managerType'))
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


