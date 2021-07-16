import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/message.service';
import { UtilityService } from 'src/services/utility.service';
import { Form } from '../../classes/Form';
import { Patent } from '../../classes/Instructions/Patent';

@Component({
  selector: 'app-patent-instruction-registration',
  templateUrl: './patent-instruction-registration.component.html',
  styleUrls: ['./patent-instruction-registration.component.css']
})
export class PatentInstructionRegistrationComponent implements OnInit {
  Forms:Form = new Form();
  formMap = Form.formMap;
  stripFields = UtilityService.stripFieldsFromList
  patent_particulars:any[];
  patentActionForm:any = {};
  listOfPatentActionForm:any[];
  is_new_action:boolean = false;
  actionList = [
    'search',
    'renewal',
    'registration',
    'procurement',
    'ctc',
    'change-name',
    'change-address',
    'assignment-merger',
    "amendment",
  ];
  patentActionFormDictionary =  {
    'search':this.Forms.P_searchActionCreateForm,
    'renewal':this.Forms.P_renewalActionCreateForm,
    'registration':this.Forms.P_registrationActionCreateForm,
    'procurement':this.Forms.P_procurementOfCertificateActionCreateForm,
    'ctc':this.Forms.P_CTCActionCreateForm,
    'change-name':this.Forms.P_changeOfNameActionCreateForm,
    'change-address': this.Forms.P_changeOfAddressActionCreateForm,
    'assignment-merger':this.Forms.P_assignmentMergerActionCreateForm,
    "amendment": this.Forms.P_assignmentMergerActionCreateForm,
  }
  patentCreateForm = this.Forms.patentCreateForm
  current_action: any;
  constructor(public router: Router,
    private apiService: ApiService,
    private messageService: MessageService,
    public utilityService:UtilityService) { }

  ngOnInit(): void {
    this.patent_particulars = this.utilityService.toList(this.patentCreateForm);
  }

   changeActionForm(event:any){
    this.current_action = event.target.value
    this.patentActionForm = this.patentActionFormDictionary[event.target.value]
    this.patentActionForm['type_id'] = this.current_action; // set type_id to current_action
    this.listOfPatentActionForm = this.utilityService.toList(this.patentActionForm);
  }

  addActionToggle() {
    this.is_new_action = !this.is_new_action
  }
  viewPatents() {
    this.router.navigate(['view/patent'])
  }
  formValueSetter(itemName, itemValue, itemType){
    this.patentActionForm[itemName] = { value:itemValue.target.value, type:itemType };
  }


  registerPatent(){
      if(this.is_new_action) {

        this.apiService
        .documentRequest('patent','post',null,this.formMap(this.patentCreateForm))
        .pipe(
          switchMap(
            (resolvedPatent:Patent) => {
              this.messageService.pushSuccess("Successfully created Patent!");
              return this.apiService.documentRequest(
                `patent/${resolvedPatent.id}/${this.current_action}`,
                'put', null, this.formMap(this.patentActionForm))}) )
        // Subscription
        .subscribe(() =>{
          this.messageService.pushSuccess("Successfully created Patent with Action!");},
          (errorResponse: HttpErrorResponse) => {
            this.messageService.pushError(errorResponse.error) });

      }
      else {

        this.apiService
        .documentRequest('patent','post',null,this.formMap(this.patentCreateForm))
        // Subscription
        .subscribe(() =>{
          this.messageService.pushSuccess("Successfully created Patent!");},
          (errorResponse: HttpErrorResponse) => {
            this.messageService.pushError(errorResponse.error) });

      }

  }
}



