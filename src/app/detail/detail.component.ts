import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilityService } from 'src/services/utility.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { Action } from '../interfaces/Action';
import { Patent } from '../classes/Instructions/Patent';
import { switchMap } from 'rxjs/operators';
import { MessageService } from 'src/services/message.service';
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
    .subscribe(resp => {
      this.delete_is_active = resp;
    });
    this.utilityService.editActionOverlaySubject
    .subscribe(resp => {
      this.edit_action_is_active = resp
    });
    this.activatedRoute.params
    .subscribe( (params: Params) => {
        this.patentID = params['id'];
    });
      this.apiService.documentRequest("patent","get", this.patentID)
      .subscribe( (patent: Patent) => {
        this.patent$ = patent;
        this.listOfPatent = Object.entries(patent);
    });
  }

  ngOnDestroy(){}

  toggleEdit(prop){
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
    this.apiService
    .documentRequest("patent","put",this.patentID,Object.fromEntries(this.listOfPatent))
    .pipe(
      switchMap((resp:Patent)=>{
        return this.apiService.documentRequest("patent","get", resp.id) }))
      .subscribe( (patent: Patent) => {
        this.patent$ = patent;
        this.listOfPatent = Object.entries(patent);
        this.cancelEdit();
        this.messageService.pushSuccess(`Successfully Edited patent with ID:${patent.id}`);
    }, (errorResponse:HttpErrorResponse) =>{
        this.messageService.pushError(errorResponse.error)
    });

  }

  // Assigning a static method from the utility service class,
  // allows it to be used in the template normally
  stripFieldsFromList = UtilityService.stripFieldsFromList;

  setTargetAction(targetAction: Action) {
    return this.targetAction = targetAction;
  }
  setTypeId(object: any, new_type_id) {
    return object["type_id"] = new_type_id;
  }

  setPatentTypeId(list: any[]){
    return list.forEach((item)=>{
      if(item[0] == "type_id"){
        item[1] = "patent"
      }
    });
  }

  summonDeleteOverlay(){
    this.utilityService.setDeleteOverlayActive();
    this.utilityService.deleteOverlaySubject
    .subscribe(resp=>{
      this.delete_is_active = resp;
    });
  }

  summonEditActionOverlay(){
    this.utilityService.setEditActionOverlayActive();
    this.utilityService.editActionOverlaySubject
    .subscribe(resp =>{
      this.edit_action_is_active = resp
    });

  }

}
