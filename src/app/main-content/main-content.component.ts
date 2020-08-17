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
  patent_ActionTypes = new Action().patent_ActionTypes;
  patentActionUrlDict: any = new Action().patentActionUrlDict;
  // strategy for fetching resources from end-point
  documentType: any  = 'AmendmentAction';

  constructor(
    private router: Router,
    public utilityService:UtilityService,
    private apiService:ApiService, 
    private messageService: MessageService) { 
      this.utilityService.setModalFormInactive();
      this.utilityService.modalFormActive.subscribe( bool => {
        this.modalIsActive = bool;
      })

  }

  ngOnInit(): void {
    this.apiService.patentDocumentRequest(
    this.patentActionUrlDict['AmendmentAction'],
    "get").subscribe((response:any) => {
      this.messageService.clear();
      this.messageService.pushSuccess('Successfully fetched amendment actions!');
      // assign results to our list
      this.documentList = response.results;
    }, err => {
        console.log(err);
        this.messageService.pushError(err);
        // this.messages.add(err);
    });
  }

  ngOnDestroy(){
    this.utilityService.modalFormActive.unsubscribe();
  }
  fetchDocuments(event?) {
    console.log("fetch documents called");
    
    if(event){
      this.documentType = event.target.value;
      
      this.apiService.patentDocumentRequest(
        this.patentActionUrlDict[this.documentType],
        "get").subscribe((response:any) => {
          this.messageService.clear();
          this.messageService.pushSuccess('Successfully fetched amendment actions!');
          this.documentList = response.results;
        }, err => {
            console.log(err);
            this.messageService.pushError(err);
            
        });

    }
    


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