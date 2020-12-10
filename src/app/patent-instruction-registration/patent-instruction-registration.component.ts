import { Component, OnInit, SimpleChanges } from '@angular/core';
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
  patentActionForm:any;
  listOfPatentActionForm:any[];
  is_new_action:boolean = false;
  actionList = [
    'search-action',
    'renewal-action',
    'registration',
    'procurement',
    'ctc',
    'change-name',
    'change-address',
    'assignment-merger-action',
    "amendment-action",
  ];
  patentActionFormDictionary =  {
    'search-action':this.Forms.P_search_action,
    'renewal-action':this.Forms.P_renewal_action,
    'registration':this.Forms.P_registration,
    // 'patent-particulars':this.Forms.P_patent_particulars,
    'procurement':this.Forms.P_procurement,
    'ctc':this.Forms.P_ctc,
    'change-name':this.Forms.P_change_name,
    'change-address': this.Forms.P_change_address,
    'assignment-merger-action':this.Forms.P_assignmentMergerActionCreateForm,
    "amendment-action": this.Forms.P_amendment_action,
  }
  patentCreateForm = this.Forms.patentCreateForm
  currentAction = {
    
  }
  constructor(public router: Router,
    public utilityService:UtilityService) { }

  ngOnInit(): void {
    this.patent_particulars = this.utilityService.toList(this.patentCreateForm);
   }
 
   changeInstructionForm(event:any){
    console.log( this.utilityService.toList(this.patentActionFormDictionary[event.target.value]));
    
    this.patentActionForm = this.patentActionFormDictionary[event.target.value]
    this.listOfPatentActionForm = this.utilityService.toList(this.patentActionForm);
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

  patentFormMap(){
    let product = {...this.patentCreateForm};
    for( const[key, value] of Object.entries(this.patentCreateForm) ){
      let actualValue = value.value;
      product[key] = actualValue;
    }
    // console.log("product:",product,"original:",this.patentCreateForm);
    return product;
  }
  actionFormMap(){
    let product = {...this.patentActionForm}
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