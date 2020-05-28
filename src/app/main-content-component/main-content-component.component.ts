import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/message.service';

@Component({
  selector: 'main-content-component',
  templateUrl: './main-content-component.component.html',
  styleUrls: ['./main-content-component.component.css']
})
export class MainContentComponentComponent implements OnInit {

  documentList:Document[];

  constructor(apiService:ApiService, messageService: MessageService) { 
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

    apiService.getAmmendmentAction().subscribe((response) => {
      messageService.pushSuccess('Successfully fetched ammendment actions!');
      console.log(response);
      // alert('Fetching Successful !');
    }, err => {
        console.log(err);
        messageService.pushError(err);
        // this.messages.add(err);
      }
    );



  }

  ngOnInit(): void {
  }

  fetchDocuments() {

  }

  createDocument() {
    this.documentList.push(
      {
        title:`Item${this.documentList.length+1} Title`,
        body: `Item${this.documentList.length+1} Description...`,
        footer: `Item${this.documentList.length+1} footer`
      }
    )
  }

}
interface Document {
  title:string;
  body:string;
  attachment?:any;
  footer?:string;
}