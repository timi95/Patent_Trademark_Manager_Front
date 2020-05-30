import { Component, OnInit, Input } from "@angular/core";
import { FormControl, FormBuilder, FormGroup } from "@angular/forms";
import { ApiService } from "src/services/api.service";
import { MessageService } from "src/services/message.service";

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
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: [""],
      message: [""],
      career: [""],
    });
    this.myForm.valueChanges.subscribe(console.log);
  }

  onSubmit(): void {
    this.apiService.createAmmendmentAction(this.myForm).subscribe(
      (response) => {
        this.messageService.pushSuccess("Successfully submitted!");
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
