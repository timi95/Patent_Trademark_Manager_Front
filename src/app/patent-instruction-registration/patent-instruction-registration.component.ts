import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { switchMap } from 'rxjs/operators';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/message.service';
import { UtilityService } from 'src/services/utility.service';
import { Form } from '../classes/Form';
import { Patent } from '../classes/Instructions/Patent';

@Component({
  selector: 'app-patent-instruction-registration',
  templateUrl: './patent-instruction-registration.component.html',
  styleUrls: ['./patent-instruction-registration.component.css']
})
export class PatentInstructionRegistrationComponent implements OnInit {
  Forms:Form = new Form();
  formMap = Form.formMap;
  patent_particulars:any[];
  patentActionForm:any;
  listOfPatentActionForm:any[];
  is_new_action:boolean = false;
  actionList = [
    'search',
    'renewal',
    'registration',
    'procurement',
    'ctc',
    'change-name',
    'change-address',
    'assignment-merger',
    "amendment",
  ];
  patentActionFormDictionary =  {
    'search':this.Forms.P_searchActionCreateForm,
    'renewal':this.Forms.P_renewalActionCreateForm,
    'registration':this.Forms.P_registrationActionCreateForm,
    'procurement':this.Forms.P_procurementOfCertificateActionCreateForm,
    'ctc':this.Forms.P_CTCActionCreateForm,
    'change-name':this.Forms.P_changeOfNameActionCreateForm,
    'change-address': this.Forms.P_changeOfAddressActionCreateForm,
    'assignment-merger':this.Forms.P_assignmentMergerActionCreateForm,
    "amendment": this.Forms.P_assignmentMergerActionCreateForm,
  }
  patentCreateForm = this.Forms.patentCreateForm
  current_action: any;
  constructor(public router: Router,
    private apiService: ApiService,
    private messageService: MessageService,
    public utilityService:UtilityService) { }

  ngOnInit(): void {
    this.patent_particulars = this.utilityService.toList(this.patentCreateForm);
   }

   changeActionForm(event:any){
    this.current_action = event.target.value
    this.patentActionForm = this.patentActionFormDictionary[event.target.value]
    this.listOfPatentActionForm = this.utilityService.toList(this.patentActionForm);
  }

  createDocument() {
  }


  viewDetails(item:Document){
  }


  deleteDocument(){
  }

  addActionToggle(){
    this.is_new_action = !this.is_new_action
  }
  viewPatents(){
    this.router.navigate(['view/patent'])
  }


  // formMap(form){
  //   console.log("form from formMap():",form);

  //   let product = {...form};
  //   let Entries: [string, ActionCreateFormValue][] = Object.entries(form);
  //   for( const[key, value] of Entries){
  //     let actualValue = value.value;
  //     product[key] = actualValue;
  //   }
  //   return product;
  // }


  /*
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
    */


  registerPatent(id?:string){
    console.log("patent-form:",
    this.formMap(this.patentCreateForm),
    "action form:",
    this.formMap(this.patentActionForm));

    this.apiService
    .documentRequest('patent','post',null,this.formMap(this.patentCreateForm))
    .pipe(
      switchMap(
        (newPatent:Patent) => {
          return this.apiService
          .documentRequest(
            `patent/${newPatent.id}/${this.current_action}-action`,
            'put', null, this.formMap(this.patentActionForm))}) )
    // Subscription
    .subscribe(() =>{
      this.messageService.pushSuccess("Successfully created Patent")
    }, (errorResponse:HttpErrorResponse) =>{
        this.messageService.pushError(errorResponse.error)
    });
  }
}

export interface ActionCreateFormValue {
  value: any;
  type: string;
}
interface Document {
  id:any;
  title:string;
  body:string;
  attachment?:any;
  footer?:string;
}
interface DocumentList{results:Document[];}
