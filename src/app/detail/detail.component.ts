import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilityService } from 'src/services/utility.service';
import { AmendmentAction } from 'src/interfaces/AmendmentAction';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { Action } from '../interfaces/Action';
import { Patent } from '../classes/Instructions/Patent';
import { delay, distinctUntilChanged, repeat, switchMap, tap } from 'rxjs/operators';
import { MessageService } from 'src/services/message.service';
import { PatentActionListComponent,PatentActionListComponentData } from '../patent-action-list/patent-action-list.component';
import { Form } from '../classes/Form';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  patentID: string;
  patent$: Patent;
  targetAction: Action;
  listOfPatent: any[];
  is_editing: string = '';
  delete_is_active:boolean;
  edit_action_is_active:boolean;
  PatentActionListData: any;

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    public utilityService: UtilityService,
    public apiService: ApiService) {
  }


  ngOnInit(): void {
    this.utilityService.setDeleteOverlayInactive();
    this.utilityService.deleteOverlaySubject
    .subscribe(resp =>{
      this.delete_is_active = resp;
    });
    this.utilityService.editActionOverlaySubject
    .subscribe(resp =>{
      this.edit_action_is_active = resp
    });
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        console.log(params['id']);
        this.patentID = params['id'];
      }
      );
      this.apiService.documentRequest("patent","get", this.patentID)
      .subscribe( (patent: Patent) => {
        this.patent$ = patent;
        this.listOfPatent = Object.entries(patent);
    });
  }

  ngOnDestroy(){

  }

  toggleEdit(prop){
    console.log('toggling edit for property:',prop);
    this.is_editing = prop
  }
  cancelEdit(){
    this.is_editing = ''
  }

  viewPatents(){
    this.router.navigate(['view/patent']);
  }
  navigateHome(){
    this.router.navigate(['']);
  }

  saveChanges(){
    this.setPatentTypeId(this.listOfPatent)
    console.log("Current conversion: ",Object.fromEntries(this.listOfPatent));

    this.apiService
    .documentRequest("patent","put",this.patentID,Object.fromEntries(this.listOfPatent))
    .pipe(
      switchMap( (resp:Patent)=>{
        return this.apiService.documentRequest("patent","get", resp.id)
      }) )
      .subscribe( (patent: Patent) => {
        this.patent$ = patent;
        this.listOfPatent = Object.entries(patent);
        this.cancelEdit();
        this.messageService.pushSuccess(`Successfully Edited patent with ID:${patent.id}`);
    }, (errorResponse:HttpErrorResponse) =>{
        this.messageService.pushError(errorResponse.error)
    });

  }

  stripListOfPatent(listOfPatent: any[]){
    return listOfPatent.filter(
      patent =>
              patent[0] != 'type_id'
              &&patent[0] != 'id'
              &&patent[0] != 'image_list'
              &&patent[0] != 'action_list' );
  }

  setTypeId(object: any, new_type_id) {
    // console.log('object:',object,'id:',new_type_id);
    return object["type_id"] = new_type_id;
  }

  setPatentTypeId(list: any[]){
    return list.forEach((item,index)=>{
      if(item[0] == "type_id"){
        item[1] = "patent"
      }
    });
  }



  summonDeleteOverlay(){
    console.log('summoning delete overlay');
    this.utilityService.setDeleteOverlayActive();
    this.utilityService.deleteOverlaySubject
    .subscribe(resp=>{
      this.delete_is_active = resp;
    });
  }

  summonEditActionOverlay(){
    console.log('summoning edit action overlay');
    this.utilityService.setEditActionOverlayActive();
    this.utilityService.editActionOverlaySubject
    .subscribe(resp =>{
      this.edit_action_is_active = resp
    });

  }

  setCurrentAction($event?:PatentActionListComponentData){
    this.PatentActionListData = $event;
    console.log('data', this.PatentActionListData);
  }
  setTargetAction(targetAction: Action) {
    return this.targetAction = targetAction;
  }

  applyCurrentAction(){
    let action_payload = Form.formMap(this.PatentActionListData.patentActionForm);
    action_payload['type_id'] = this.PatentActionListData.current_action;
    this.apiService.documentRequest(
      'patent',
      'put',
      `${this.patentID}/${this.PatentActionListData.current_action}`,
      JSON.stringify(action_payload))
      .subscribe(resp=>{console.log('apply action response:',resp)})

  }


}
