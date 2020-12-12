import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/message.service';
import { UtilityService } from 'src/services/utility.service';
import { Form } from '../classes/Form';

@Component({
  selector: 'app-patent-instruction-registration',
  templateUrl: './patent-instruction-registration.component.html',
  styleUrls: ['./patent-instruction-registration.component.css']
})
export class PatentInstructionRegistrationComponent implements OnInit {
  Forms:Form = new Form();
  patent_particulars:any[];
  patentActionForm:any;
  listOfPatentActionForm:any[];
  is_new_action:boolean = false;
  actionList = [
    'search-action',
    'renewal-action',
    'registration',
    'procurement',
    'ctc',
    'change-name',
    'change-address',
    'assignment-merger-action',
    "amendment-action",
  ];
  patentActionFormDictionary =  {
    'search-action':this.Forms.P_searchActionCreateForm,
    'renewal-action':this.Forms.P_renewalActionCreateForm,
    'registration':this.Forms.P_registrationActionCreateForm,
    // 'patent-particulars':this.Forms.P_patent_particulars,
    'procurement':this.Forms.P_procurementOfCertificateActionCreateForm,
    'ctc':this.Forms.P_CTCActionCreateForm,
    'change-name':this.Forms.P_changeOfNameActionCreateForm,
    'change-address': this.Forms.P_changeOfAddressActionCreateForm,
    'assignment-merger-action':this.Forms.P_assignmentMergerActionCreateForm,
    "amendment-action": this.Forms.P_assignmentMergerActionCreateForm,
  }
  patentCreateForm = this.Forms.patentCreateForm
  currentAction = {
    
  }
  constructor(public router: Router,
    private apiService: ApiService,
    private messageService: MessageService,
    public utilityService:UtilityService) { }

  ngOnInit(): void {
    this.patent_particulars = this.utilityService.toList(this.patentCreateForm);
   }
 
   changeInstructionForm(event:any){    
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

  formMap(form){
    let product = {...form};
    for( const[key, value] of Object.entries(this.patentCreateForm) ){
      let actualValue = value.value;
      product[key] = actualValue;
    }
    // console.log("product:",product,"original:",this.patentCreateForm);
    return product;
  }


  registerPatent(){
    this.apiService
    .documentRequest('Patent','post',null,this.formMap(this.patentCreateForm))
    .subscribe(resp =>{
      this.messageService.pushSuccess("Successfully created Patent")
    }, err =>{ this.messageService.pushError('Error occured ')});
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