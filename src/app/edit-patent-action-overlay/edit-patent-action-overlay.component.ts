import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'edit-p-action-overlay',
  templateUrl: './edit-patent-action-overlay.component.html',
  styleUrls: ['./edit-patent-action-overlay.component.css']
})
export class EditPatentActionOverlayComponent implements OnInit {
  @Input('active') active: boolean;
  @Input('targetId') targetId: string;
  constructor() { }


  ngOnInit(): void {
  }

}
