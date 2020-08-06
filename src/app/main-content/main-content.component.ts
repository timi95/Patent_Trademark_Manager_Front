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
  
  // strategy for fetching resources from end-point
  // list of Action-types, Particulars, and Profile
  patent_ActionTypes:string[] = [
    'SearchAction',
    'RenewalAction',
    'RegistrationAction',
    'ProcurementOfCertificateAction',
    'CTCAction',
    'ChangeOfNameAction',
    'ChangeOfAddressAction',
    'AssignmentMergerAction',
    'AmendmentAction'
  ];patent_particulars:string[] = ['PatentParticlars'];
  trademark_ActionType:string[] = [
    'SearchAction',
    'RenewalAction',
    'RegistrationAction',
    'ReclassificationAction',
    'ChangeName_AddressAction',
    'CertificateProcurementAction',
    'AssignmentMergerAction',
    'AmendementAction'
  ];trademark_profile:string[] = ['TrademarkProfile'];

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
  fetchDocuments(event?) {
    let documentType = event.target.value;
    switch (documentType) {
      case this.patent_ActionTypes[0]:
        
        break;
    
      default:
        break;
    }

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
    });

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