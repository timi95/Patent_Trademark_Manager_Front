import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/message.service';
import { OverlayComponent } from "../overlay/overlay.component";
import { UtilityService } from 'src/services/utility.service';
import { Action } from 'src/app/classes/Action'
import { AmendmentAction } from 'src/interfaces/AmendmentAction';
import { Router } from '@angular/router';
import { from } from 'rxjs';


@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  documentList:Document[];
  modalIsActive:boolean;

  // patentActionUrlDict: any = new Action().patentActionUrlDict;
  // trademarkActionUrlDict: any = new Action().trademarkActionUrlDict
  documentTypeUrlDict: any ;
  // strategy for fetching resources from end-point
  documentType: any  = localStorage.getItem('documentType');
  managerType:string = localStorage.getItem('managerType');

  constructor(
    private router: Router,
    public utilityService:UtilityService,
    private apiService:ApiService, 
    private messageService: MessageService) { 
      this.utilityService.setModalFormInactive();
      this.utilityService.modalFormActive.subscribe( bool => {
        this.modalIsActive = bool;
      });
      
  }

  ngOnInit(): void {
    this.documentTypeUrlDict = localStorage.getItem('managerType')=='Patent_manager'?
    new Action().patentActionUrlDict:
    new Action().trademarkActionUrlDict;
    this.utilityService.documentListSubject.subscribe(resp=>{this.documentList=resp});
    this.utilityService.documentTypeSubject.subscribe(resp=>{this.documentType=resp});
  }

  ngOnDestroy(){
    this.utilityService.modalFormActive.unsubscribe();
    this.utilityService.documentListSubject.unsubscribe();
  }

  createDocument() {
    this.utilityService.setModalFormActive();
    this.utilityService.modalFormActive.subscribe( bool => {
      this.modalIsActive = bool;
    });

  }


  viewDetails(item:Document){
    console.log(`Navigating to Amendment Details id ${item.id}`);
    this.utilityService.loadDetails(item);
    localStorage.setItem('documentType', this.documentType);
    this.router.navigate([`detail/${item.id}`]);
  }


}
interface Document {
  id:any;
  title:string;
  body:string;
  attachment?:any;
  footer?:string;
}