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

  myForm: FormGroup;
  name = new FormControl("");

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private utilityService: UtilityService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      date_amendment_instruction_received: [""],
      nature_of_amendment: [""],
      amending_clerk: [""],
      date_amending_clerk_instructed: [""],
      status_of_amendment: [""],
      date_amendment_received: [""]
    });
    this.myForm.valueChanges.subscribe(console.log);
  }

  setInactive(): void {
    this.utilityService.setModalFormInactive();
    this.utilityService.modalFormActive.subscribe( bool => {
      
      this.active  = bool;
    })
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
      }
    );
  }
}


