import { Component, OnInit,OnChanges } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/message.service';
import { OverlayComponent } from "../overlay/overlay.component";
import { UtilityService } from 'src/services/utility.service';
import { Action } from 'src/app/classes/Action'
import { AmendmentAction } from 'src/interfaces/AmendmentAction';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { map, retry, switchMap, tap } from 'rxjs/operators';


@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  documentList:Document[];
  // modalIsActive:boolean;
  formType:string = 'create';

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
      // this.utilityService.modalFormActive.subscribe( bool => { this.modalIsActive = bool; });
    // this.utilityService.managerTypeSubject.pipe(tap(resp => { this.managerType = resp; }));
      
  }

  ngOnInit(): void {
    this.utilityService.managerTypeSubject.subscribe(resp=>{
      // update managerType for this component
      this.managerType = resp;
      // assignment for correct url dictionary
      this.documentTypeUrlDict = resp =='Patent_manager'?
      new Action().patentActionUrlDict:
      new Action().trademarkActionUrlDict;
    });

    this.utilityService.documentListSubject.subscribe(resp=>{this.documentList=resp});
    this.utilityService.documentTypeSubject
    .pipe(
      // when the documentType changes, make an api call with the new documentType
      switchMap(documentTypeResp=>{ 
        this.documentType = documentTypeResp;
        return this.apiService
            .documentRequest(this.documentTypeUrlDict[documentTypeResp],'get',null,null,this.managerType)}),
            retry(5),
            tap((resp:{results:Document[]}) => { 
              // update everywhere else via the service
              localStorage.setItem('documentList',JSON.stringify(resp.results));
              this.utilityService.updateDocumentList();
              // update the list in this component
              this.documentList = resp.results;}))
        .subscribe({ error(err: any): void { console.error('Where#Are#We', err);} });
    
  }

  createDocument() {
    this.utilityService.setModalFormActive();
  }


  viewDetails(item:Document){
    console.log(`Navigating to Amendment Details id ${item.id}`);
    this.formType = 'update';
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
interface DocumentList{results:Document[];} 