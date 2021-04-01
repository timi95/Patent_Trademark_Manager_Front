import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UtilityService } from 'src/services/utility.service';
import { Action } from '../classes/Action';
import { Form } from '../classes/Form';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'action-list',
  templateUrl: './patent-action-list.component.html',
  styleUrls: ['./patent-action-list.component.css']
})
export class PatentActionListComponent implements OnInit {

  Forms:Form = new Form();
  patentActionForm:any;
  listOfPatentActionForm:any[];
  actionList = new Action().patent_actionList
  patentActionFormDictionary =  {
    'search-action':this.Forms.P_searchActionCreateForm,
    'renewal-action':this.Forms.P_renewalActionCreateForm,
    'registration':this.Forms.P_registrationActionCreateForm,
    'procurement':this.Forms.P_procurementOfCertificateActionCreateForm,
    'ctc':this.Forms.P_CTCActionCreateForm,
    'change-name':this.Forms.P_changeOfNameActionCreateForm,
    'change-address': this.Forms.P_changeOfAddressActionCreateForm,
    'assignment-merger-action':this.Forms.P_assignmentMergerActionCreateForm,
    'amendment-action': this.Forms.P_assignmentMergerActionCreateForm,
  }

  patentActionStringDictionary = {
    'amendment-action': 'amendment-action',
    'assignment-merger-action':'assignment-merger-action',
    'ctc':'ctc-action',
    'change-name':'change-of-name-action',
    'change-address':'change-of-address-action',
    'procurement':'procurement-of-certificate-action',
    'renewal-action':'renewal-action',
    'registration':'registration-action',
    'search-action':'search-action',


  }

  @Output() patentActionListData = new EventEmitter<PatentActionListComponentData>();



  constructor( public utilityService:UtilityService ) { }

  changeActionForm(event:any){    
    this.patentActionListData.emit({
    current_action:this.patentActionStringDictionary[event.target.value],
    patentActionForm:this.patentActionFormDictionary[event.target.value] });
    
  }


  ngOnInit(): void {
  }

}

export interface PatentActionListComponentData{
    current_action:string;
    patentActionForm:any;
    // listOfPatentActionForm:any[];
}
