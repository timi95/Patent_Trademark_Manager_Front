import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/services/utility.service';
import { Form } from '../classes/Form';

@Component({
  selector: 'app-patent-instruction-registration',
  templateUrl: './patent-instruction-registration.component.html',
  styleUrls: ['./patent-instruction-registration.component.css']
})
export class PatentInstructionRegistrationComponent implements OnInit {
  Forms:Form = new Form();
  patent_particulars:any[];
  patent_instructionForm:any[];
  is_new_action:boolean = false;
  instructionList =
  [
    'search-action',
    'renewal-action',
    'registration',
    // 'patent-particulars',
    'procurement',
    'ctc',
    'change-name',
    'change-address',
    'assignment-merger-action',
    "amendment-action",
  ];
  instructionFormDictionary =  {
    'search-action':this.Forms.P_search_action,
    'renewal-action':this.Forms.P_renewal_action,
    'registration':this.Forms.P_registration,
    // 'patent-particulars':this.Forms.P_patent_particulars,
    'procurement':this.Forms.P_procurement,
    'ctc':this.Forms.P_ctc,
    'change-name':this.Forms.P_change_name,
    'change-address': this.Forms.P_change_address,
    'assignment-merger-action':this.Forms.P_assignment_merger_action,
    "amendment-action": this.Forms.P_amendment_action,
  }
  patentCreateForm = {
    action_list: [],
    applicable_service_charge: {value:"default value", type:"text"},
    certificate_procurement_due_date: { value: new Date(), type: "datetime-local"},
    clerk_responsible: {value:"default value", type:"text"},
    client_id: {value:"default value", type:"text"},
    clients_address: {value:"default value", type:"text"},
    clients_contact_person: {value:"default value", type:"text"},
    clients_reference_number: {value:"default value", type:"text"},
    convention_country: {value:"default value", type:"text"},
    current_instruction: {value:"default value", type:"text"},
    current_status: {value:"default value", type:"text"},
    date_completed_job_received: { value: new Date(), type: "datetime-local"},
    date_incoming_abuja_schedule: { value: new Date(), type: "datetime-local"},
    date_instruction_received: { value: new Date(), type: "datetime-local"},
    date_of_instruction: { value: new Date(), type: "datetime-local"},
    date_outgoing_abuja_schedule: { value: new Date(), type: "datetime-local"},
    facilitation: {value:"default value", type:"text"},
    filing_receipt_status: {value:"default value", type:"text"},
    incentive_due_clerk: {value:"default value", type:"text"},
    invention_description: {value:"default value", type:"text"},
    lawyer_responsible: {value:"default value", type:"text"},
    month_certificate_procurement_due: {value:"default value", type:"text"},
    month_incoming_abuja_schedule: {value:"default value", type:"text"},
    month_outgoing_abuja_schedule: {value:"default value", type:"text"},
    name_of_client: {value:"default value", type:"text"},
    name_of_patentee: {value:"default value", type:"text"},
    official_fee: {value:"default value", type:"text"},
    our_reference_number: {value:"default value", type:"text"},
    patent_registration_number: {value:"default value", type:"text"},
    patentee_address: {value:"default value", type:"text"},
    quickteller_fee: {value:"default value", type:"text"},
    type_id: "patent"
  }
  constructor(public router: Router,
    public utilityService:UtilityService) { }

  ngOnInit(): void {
    this.patent_particulars = this.utilityService.toList(this.patentCreateForm);
   }
 
   changeInstructionForm(event:any){
    console.log( this.utilityService
      .toList(this.instructionFormDictionary[event.target.value]) );
    
    this.patent_instructionForm = this.utilityService
    .toList(this.instructionFormDictionary[event.target.value]);
  }

  createDocument() {
  }


  viewDetails(item:Document){
  }


  deleteDocument(){
  }

  addActionToggle(){
    this.is_new_action = !this.is_new_action
  }
  viewPatents(){
    this.router.navigate(['view/patent'])
  }

}
interface Document {
  id:any;
  title:string;
  body:string;
  attachment?:any;
  footer?:string;
}
interface DocumentList{results:Document[];} 