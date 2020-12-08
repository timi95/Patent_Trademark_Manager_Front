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
  constructor(public router: Router,
    public utilityService:UtilityService) { }

  ngOnInit(): void {
    this.patent_particulars = this.utilityService.toList(this.Forms.P_patent_particulars);
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