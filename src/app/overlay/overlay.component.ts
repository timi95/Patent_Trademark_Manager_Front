import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { FormControl, FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ApiService } from "src/services/api.service";
import { MessageService } from "src/services/message.service";
import { UtilityService } from 'src/services/utility.service';
import { AmendmentAction } from 'src/interfaces/AmendmentAction';
import { Action } from '../classes/Action';

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

  editeableAsList:any[] = [];
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
    private utilityService: UtilityService,
    private messageService: MessageService ) {
    }
    

  ngOnInit(): void {
    // Initialised createForm
    this.createForm = this.formBuilder.group(this.documentTypeFormDictionary[this.documentType]);
    // console.log("createForm: ", this.toList(this.documentTypeFormDictionary[this.documentType]));
    
    this.utilityService.detailSubject.subscribe( details => {
      this.editeableAsList = this.toList(details);
      this.editeableObject = this.listToObject(this.editeableAsList);
      // console.log("Editeable as list: ", this.editeableAsList );
    });
    
    this.dynamicFormGroupGenerator();

  }

  toList(target:object): any[] {
    let result: any[] = Object.entries(target);
    return result;
  }
  listToObject(target:any[]): object {
    let result = Object.fromEntries(target);
    return result;
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

  dynamicFormGroupGenerator(): FormGroup {
    this.editForm = this.formBuilder.group(this.listToObject(this.editeableAsList));
    this.deleteForm = this.formBuilder.group(this.editeableObject);
    return this.editForm;
  }

  setInactive(): void {
    switch (this.formType) {

      case this.formTypes[0]:
        this.utilityService.setModalFormInactive();
        this.utilityService.modalFormActive.subscribe( bool => {
          this.active = bool;
        });
        break;
      
      case this.formTypes[1]:
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

  onSubmit(actionType:string): void {

    switch (actionType) {
      case this.formTypes[0]:
        this.apiService
        .patentDocumentRequest(
          this.documentType,
          "post",
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
        // TODO: work on this next! 
          this.apiService
          .patentDocumentRequest(this.documentType,"put",this.editForm.value )
          .subscribe( resp => {
            this.messageService.clear();
            this.messageService.pushSuccess("Successfully Updated! ");
            this.setInactive();
            // console.log(resp);
            this.editeableObject = this.editForm.value;
            window.location.reload();
            
          }, (err) => {
            this.messageService.pushError(`Could not update: ${err}`);
          } );
      break;

      case this.formTypes[2]:
          this.apiService
          .patentDocumentRequest(this.documentType,"delete" ,this.deleteForm.value)
          .subscribe( resp => {
            this.messageService.clear();
            this.messageService.pushSuccess(`Successfully deleted ${this.editeableObject.id}!`);
            this.setInactive();
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


