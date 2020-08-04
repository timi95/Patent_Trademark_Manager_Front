import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/message.service';
import { OverlayComponent } from "../overlay/overlay.component";
import { UtilityService } from 'src/services/utility.service';
import { AmendmentAction } from 'src/interfaces/AmendmentAction';
import { Router } from '@angular/router';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  documentList:Document[];
  modalIsActive:boolean;
  amendmentActionList: AmendmentAction[] = [];
  
  // a generic list that stocks all possible resource type from the end point
  resourceList: any[];s

  constructor(
    private router: Router,
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
    this.fetchDocuments();


  }

  ngOnDestroy(){
    this.utilityService.modalFormActive.unsubscribe();
  }
  fetchDocuments() {
    this.apiService.getAmendmentAction().subscribe((response:any) => {
      this.messageService.pushSuccess('Successfully fetched amendment actions!');
      // assign results to our list
      this.amendmentActionList = response.results;
    }, err => {
        console.log(err);
        this.messageService.pushError(err);
        // this.messages.add(err);
    });
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


  viewDetails(item:AmendmentAction){
    console.log(`Navigating to Amendment Details id ${item.id}`);
    this.utilityService.loadDetails(item);
    this.utilityService.detailSubject.subscribe(data=>console.log);
    this.router.navigate([`detail/${item.id}`], 
      // {
      //   state:{ data: item }
      // }
    );
  }

}
interface Document {
  title:string;
  body:string;
  attachment?:any;
  footer?:string;
}