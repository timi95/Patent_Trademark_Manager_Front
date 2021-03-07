import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UtilityService } from 'src/services/utility.service';
import { Form } from '../classes/Form';

@Component({
  selector: 'action-list',
  templateUrl: './patent-action-list.component.html',
  styleUrls: ['./patent-action-list.component.css']
})
export class PatentActionListComponent implements OnInit {

  Forms:Form = new Form();
  patentActionForm:any;
  listOfPatentActionForm:any[];
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
  current_action = new Subject();

  constructor( public utilityService:UtilityService ) { }

  changeActionForm(event:any){
    this.current_action.next(event.target.value);
    this.patentActionForm = this.patentActionFormDictionary[event.target.value]
    this.listOfPatentActionForm = this.utilityService.toList(this.patentActionForm);
    // console.log('current_action:', this.current_action,'\npatentActionForm:',this.formMap(this.patentActionForm));
    
  }
  ngOnInit(): void {
  }

}
