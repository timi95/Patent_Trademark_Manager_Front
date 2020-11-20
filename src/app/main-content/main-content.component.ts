import { Component, OnInit,OnChanges } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/message.service';
import { OverlayComponent } from "../overlay/overlay.component";
import { UtilityService } from 'src/services/utility.service';
import { Action } from 'src/app/classes/Action'
import { AmendmentAction } from 'src/interfaces/AmendmentAction';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { map, retry, switchMap, tap } from 'rxjs/operators';
import { Form } from '../classes/Form';


@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  Forms:Form = new Form();
  patent_particulars:any[];
  patent_instructionForm:any[];
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
  constructor(public utilityService:UtilityService) {   
  }

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


}
interface Document {
  id:any;
  title:string;
  body:string;
  attachment?:any;
  footer?:string;
}
interface DocumentList{results:Document[];} 