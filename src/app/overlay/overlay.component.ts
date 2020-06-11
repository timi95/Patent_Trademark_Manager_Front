import { Component, OnInit, Input } from "@angular/core";
import { FormControl, FormBuilder, FormGroup } from "@angular/forms";
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
  formTypes:string[] = ['create','update','delete'];

  myForm: FormGroup;
  name = new FormControl("");

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private utilityService: UtilityService,
    private messageService: MessageService ) {
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      date_amendment_instruction_received: [""],
      nature_of_amendment: [""],
      amending_clerk: [""],
      date_amending_clerk_instructed: [""],
      status_of_amendment: [""],
      date_amendment_received: [""]
    });
    // this.myForm.valueChanges.subscribe(console.log);
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

  onSubmit(): void {
    this.apiService.createAmendmentAction(JSON.stringify(this.myForm.getRawValue())).subscribe(
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
  }

  toList(){

    console.log("Printing toList conversion result", Object.entries(this.editeableObject));
    
  }

}


