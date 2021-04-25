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

  @Input('patentID') patentID: any;
  @Output() patentActionListData = new EventEmitter<PatentActionListComponentData>();
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
    // this.patentActionListData.emit({
    // current_action:event.target.value,
    // patentActionForm: this.targetAction});

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

    // console.log(`/Instruction/patent/${this.patentID}/${this.current_action}`,
    // "object:",this.targetAction);

    this.apiService
    .documentRequest(
      'patent',
      'put',
      `${this.patentID}/${this.current_action}`,
      JSON.stringify(this.targetAction))
          .subscribe(resp=>{
            this.messageService.pushSuccess(`Applied action: ${resp}`)},
      (errorResponse:HttpErrorResponse)=>{
        this.messageService.pushError(errorResponse.error)
      });
  }

}

export interface PatentActionListComponentData{
    current_action:string;
    patentActionForm:any;
}
