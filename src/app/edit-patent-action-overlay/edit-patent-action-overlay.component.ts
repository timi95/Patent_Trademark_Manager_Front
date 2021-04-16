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
  @Input('targetId') targetActionId: string;

  targetAction: Action;

  constructor(private apiService: ApiService,
              private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.apiService.documentRequest('action','get', this.targetActionId)
    .subscribe((actionResponse:Action)=>{
      console.log('resp', actionResponse);
      this.targetAction = actionResponse;
    });
  }

}
