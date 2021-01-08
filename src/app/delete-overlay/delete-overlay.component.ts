import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/message.service';
import { UtilityService } from 'src/services/utility.service';
import { Form } from '../classes/Form';
import { Reminder } from '../classes/Reminder';

@Component({
  selector: 'delete',
  templateUrl: './delete-overlay.component.html',
  styleUrls: ['./delete-overlay.component.css']
})
export class DeleteOverlayComponent implements OnInit {
  @Input("active") active: boolean;
  @Input("targetId") targetID:string;
  @Input("documentType") documentType: string;
  @Input("managerType") managerType:string;

  @ViewChild('edit', { static: true }) input: ElementRef;


  deleteTarget:any;
  documentTypeFormDictionary:any = {};

  Forms = new Form();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    public utilityService: UtilityService,
    private messageService: MessageService ) {
  }

  ngOnInit(): void {
    this.apiService.documentRequest(this.documentType, "get", this.targetID)
    .subscribe(
      resp =>{
        this.deleteTarget = resp;
      });
  }

  shunOverlay($event){
    if($event.target.classList.contains("overlay")){
      this.setInactive();
    }
  }

  setInactive(): void {
    this.utilityService.setDeleteOverlayInactive();
    this.utilityService.deleteOverlaySubject
    .subscribe( bool => {this.active = bool;});
  }
  
  onSubmit(){
    console.log('Preparing Deletion',this.documentType,"delete",this.targetID);
    this.apiService.documentRequest(this.documentType,"delete",this.targetID)
    .subscribe(
      ()=>{
        this.messageService.pushSuccess('Successful Deletion!');
        this.router.navigate(['/view/patent'])
      },
      error =>{this.messageService.pushError('Unsucessful Deletion, Error'+error)} );
  }
}
