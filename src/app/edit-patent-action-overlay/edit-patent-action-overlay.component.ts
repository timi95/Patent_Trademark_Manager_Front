import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { UtilityService } from 'src/services/utility.service';
import { Action } from '../interfaces/Action';

@Component({
  selector: 'edit-p-action-overlay',
  templateUrl: './edit-patent-action-overlay.component.html',
  styleUrls: ['./edit-patent-action-overlay.component.css']
})
export class EditPatentActionOverlayComponent implements OnInit {
  @Input('active') active: boolean;
  @Input('targetAction') targetAction: Action;

  listOfTargetAction?:any[];

  constructor(private apiService: ApiService,
              private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.listOfTargetAction = Object.entries(this.targetAction);
    console.log('From edit action component, list of targetAction',this.listOfTargetAction);

  }

  /*
    this.apiService
    .documentRequest(this.targetAction.type_id,'get', this.targetAction.id)
    .subscribe((actionResponse:Action)=>{
      console.log('resp', actionResponse);
      this.targetAction = actionResponse;
    });
  */

  shunOverlay($event){
    if($event.target.classList.contains("overlay")){
      this.setInactive();
    }
  }

  setInactive(): void {
    this.utilityService.setEditActionOverlayInactive();
    this.utilityService.editActionOverlaySubject
    .subscribe( bool => {this.active = bool;});
  }

  saveChanges(){


  }

}
