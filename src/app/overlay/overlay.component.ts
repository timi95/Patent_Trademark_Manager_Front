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

    // Initialised editForm
    this.editForm = this.formBuilder.group(this.editeableObject);

    // this.createForm.valueChanges.subscribe(console.log);
    this.utilityService.detailSubject.subscribe( details => {
      // console.log("Details from detail service",details);
      this.editeableAsList = Object.entries(details);
    });


  }

  // 
  dynamicFormGroupGenerator(): FormGroup {
    this.editForm = this.formBuilder.group(this.editeableObject);
    console.log('Result of form generator: ', this.editForm.getRawValue() );
    
    return this.editForm;
  }


  setInactive(): void {
    switch (this.formType) {
      case this.formTypes[0]:
        this.utilityService.setModalFormInactive();
        this.utilityService.modalFormActive.subscribe( bool => {
          
          this.active  = bool;
        });
        break;
      
      case this.formTypes[1]:
        this.utilityService.setDetailEditFormInactive();
        this.utilityService.detailEditFormActive.subscribe( bool => {
          this.active = bool;          
        });
    
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
        console.log('form value object from switch-case: ',this.dynamicFormGroupGenerator());
        
          this.apiService
          .updateAmendmentAction( JSON.stringify( this.dynamicFormGroupGenerator() ) )
          .subscribe( resp => {
            this.messageService.pushSuccess("Successfully Updated! ");
            this.setInactive();
            console.log(resp);
            
          }, (err) => {
            this.messageService.pushError(err);
          } );
      break;

      case this.formTypes[2]:

      break;
      default:
        break;
    }
  }


}


