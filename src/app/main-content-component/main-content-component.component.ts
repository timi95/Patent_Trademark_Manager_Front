import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/message.service';
import { OverlayComponent } from "../overlay/overlay.component";
import { UtilityService } from 'src/services/utility.service';
import { AmendmentAction } from 'src/interfaces/AmendmentAction';

@Component({
  selector: 'main-content-component',
  templateUrl: './main-content-component.component.html',
  styleUrls: ['./main-content-component.component.css']
})
export class MainContentComponentComponent implements OnInit {

  documentList:Document[];
  modalIsActive:boolean;
  amendmentActionList: AmendmentAction[] = [];

  constructor(
    private utilityService:UtilityService,
    private apiService:ApiService, 
    private messageService: MessageService) { 
      this.utilityService.setModalFormInactive();
      this.utilityService.modalFormActive.subscribe( bool => {
        this.modalIsActive = bool;
      })
      this.documentList = [
      {
        title:"Item Title",
        body: "Item Description...",
        footer: "Item footer"
      },
      {
        title:"Item2 Title",
        body: "Item2 Description...",
        footer: "Item2 footer"
      }
    ]



  }

  ngOnInit(): void {
    this.apiService.getAmendmentAction().subscribe((response:any) => {
      this.messageService.pushSuccess('Successfully fetched amendment actions!');

      // assign results to our list
      this.amendmentActionList = response.results;


      console.log("  AmendmentActionList:", this.amendmentActionList," and Response data: ", response);
      // alert('Fetching Successful !');
    }, err => {
        console.log(err);
        this.messageService.pushError(err);
        // this.messages.add(err);
    });


  }

  ngOnDestroy(){
    this.utilityService.modalFormActive.unsubscribe();
  }
  fetchDocuments() {

  }

  createDocument() {
    this.utilityService.setModalFormActive();
    this.utilityService.modalFormActive.subscribe( bool => {

      this.modalIsActive = bool;
    })
    // this.documentList.push(
    //   {
    //     title:`Item${this.documentList.length+1} Title`,
    //     body: `Item${this.documentList.length+1} Description...`,
    //     footer: `Item${this.documentList.length+1} footer`
    //   }
    // )
  }

}
interface Document {
  title:string;
  body:string;
  attachment?:any;
  footer?:string;
}