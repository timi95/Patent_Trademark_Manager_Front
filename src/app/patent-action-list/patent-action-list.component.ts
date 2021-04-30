import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UtilityService } from 'src/services/utility.service';
import { Action } from '../classes/Action';
import * as IAction from '../interfaces/Action';
import { Form } from '../classes/Form';
import { Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/message.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Patent } from '../classes/Instructions/Patent';

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
    'search':this.Forms.P_searchActionCreateForm,
    'renewal':this.Forms.P_renewalActionCreateForm,
    'registration':this.Forms.P_registrationActionCreateForm,
    'procurement':this.Forms.P_procurementOfCertificateActionCreateForm,
    'ctc':this.Forms.P_CTCActionCreateForm,
    'change-name':this.Forms.P_changeOfNameActionCreateForm,
    'change-address': this.Forms.P_changeOfAddressActionCreateForm,
    'assignment-merger':this.Forms.P_assignmentMergerActionCreateForm,
    'amendment': this.Forms.P_assignmentMergerActionCreateForm,
  }

  @Output() actionRefresh = new EventEmitter<Patent>();
  @Input('patentID') patentID: any;
  overlayActive: boolean = false;
  targetAction: IAction.Action;
  listOfTargetAction?: any[];
  current_action = ''
  is_editing: string = '';
  // static methods
  formMap = Form.formMap;
  evaluateKey = Form.evaluateKey;
  constructor(
    private apiService: ApiService,
    private messageService: MessageService,
    public utilityService:UtilityService ) { }

  changeActionForm(event:any){
    this.current_action = event.target.value;
    this.targetAction = this.formMap( this.patentActionFormDictionary[event.target.value] );
    this.listOfTargetAction = Object.entries(this.targetAction);
    this.overlayActive = true;
    this.targetAction['type_id'] = this.current_action;
  }


  ngOnInit(): void {
  }
  shunOverlay($event){
    if($event.target.classList.contains("overlay")){
      this.setInactive();
    }
  }

  setInactive(): void {
    this.utilityService.setEditActionOverlayInactive();
    this.utilityService.editActionOverlaySubject
    .subscribe( bool => {this.overlayActive = bool;});
  }
  // Assigning a static method from the utility service class,
  // allows it to be used in the template normally
  stripFieldsFromList = UtilityService.stripFieldsFromList;
  toggleEdit(prop:string){
    this.is_editing = prop
  }
  cancelEdit(){
    this.is_editing = ''
  }
  applyCurrentAction(){

    this.apiService
    .documentRequest(
      'patent',
      'put',
      `${this.patentID}/${this.current_action}`,
      JSON.stringify(this.targetAction))
      .subscribe((resp:Patent)=>{
        // console.log(`PUT Instruction/patent/${this.patentID}/${this.current_action}`,
        // '\n type_id:',resp.type_id, '\n response:',resp);
            this.actionRefresh.emit(resp);//emit resultant patent with new action
            this.messageService.pushSuccess(`Applied action: ${resp.type_id}`);},
                 (errorResponse:HttpErrorResponse)=>{
            console.error(`PUT Instruction/patent/${this.patentID}/${this.current_action}`);

            this.messageService.pushError(errorResponse.error)
      });
  }

}

