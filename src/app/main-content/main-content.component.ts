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
  // dictionaries
  patentActionUrlDict = {
    'SearchAction':'search-action',
    'RenewalAction':'renewal-action',
    'RegistrationAction':'registration',
    'PatentParticulars':'patent-particulars',
    'ProcurementOfCertificateAction':'procurement',
    'CTCAction':'ctc',
    'ChangeOfNameAction':'change-name',
    'ChangeOfAddressAction':'change-address',
    'AssignmentMergerAction':'assignment-merger-action',
    'AmendmentAction':"ammendement-action"
  }

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
    this.apiService.patentDocumentRequest(
    "ammendement-action",
    "get").subscribe((response:any) => {
      this.messageService.pushSuccess('Successfully fetched amendment actions!');
      // assign results to our list
      this.amendmentActionList = response.results;
      // this.documentList = response.results;
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
    if(event){
      let documentType = event.target.value;
      console.log(this.patentActionUrlDict[documentType]);
      
      this.apiService.patentDocumentRequest(
        this.patentActionUrlDict[documentType],
        "get").subscribe((response:any) => {
          this.messageService.pushSuccess('Successfully fetched amendment actions!');
          // assign results to our list
          this.amendmentActionList = response.results;
          this.documentList = response.results;
        }, err => {
            console.log(err);
            this.messageService.pushError(err);
            // this.messages.add(err);
        });

    }
    


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


  toList(target:object): any[] {
    let result: any[] = Object.entries(target);
    return result;
  }
  listToObject(target:any[]): object {
    let result = Object.fromEntries(target);
    return result;
  }

}
interface Document {
  title:string;
  body:string;
  attachment?:any;
  footer?:string;
}