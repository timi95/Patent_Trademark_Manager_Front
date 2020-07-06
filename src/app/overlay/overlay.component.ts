import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { FormControl, FormBuilder, FormGroup, NgForm } from "@angular/forms";
import { ApiService } from "src/services/api.service";
import { MessageService } from "src/services/message.service";
import { UtilityService } from 'src/services/utility.service';

@Component({
  selector: "overlay",
  templateUrl: "./overlay.component.html",
  styleUrls: ["./overlay.component.css"],
})
export class OverlayComponent implements OnInit {
  @Input("active") active: boolean;
  @Input("formType") formType?: string;
  @Input("updateValue") editeableObject?: any;
  editeableAsList:any[] = [];
  formTypes:string[] = ['create','update','delete'];

  createForm: FormGroup;
  editForm: FormGroup;
  deleteForm: FormGroup;
  name = new FormControl("");

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private utilityService: UtilityService,
    private messageService: MessageService ) {
    }
    

  ngOnInit(): void {
    // Initialised createForm
    this.createForm = this.formBuilder.group({
      date_amendment_instruction_received: [""],
      nature_of_amendment: [""],
      amending_clerk: [""],
      date_amending_clerk_instructed: [""],
      status_of_amendment: [""],
      date_amendment_received: [""]
    });

    
    this.utilityService.detailSubject.subscribe( details => {
      this.editeableAsList = this.toList(details);
      this.editeableObject = this.listToObject(this.editeableAsList);
      console.log("Editeable as list: ", this.editeableAsList );
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
    // console.log('Result of form generator: ', this.editForm.getRawValue() );

    
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
        .createAmendmentAction(JSON.stringify(this.createForm.getRawValue()))
        .subscribe(
          (response) => {
            this.messageService.pushSuccess("Successfully submitted!");
            this.setInactive();
            console.log(response);
            window.location.reload();
            // alert('Fetching Successful !');
          },
          (err) => {
            console.log(err);
            this.messageService.pushError(err);
            // this.messages.add(err);
          } );
        
        break;
    

      case this.formTypes[1]:
        // TODO: work on this next! 
        // console.log('form value object from switch-case: ', this.editForm); 
        
          this.apiService
          .updateAmendmentAction( this.editForm.value )
          .subscribe( resp => {
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
          .deleteAmendmentAction( this.deleteForm.value)
          .subscribe( resp => {
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


