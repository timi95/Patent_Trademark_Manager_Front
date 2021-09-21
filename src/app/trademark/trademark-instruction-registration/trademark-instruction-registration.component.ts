import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from 'src/app/classes/Form';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/message.service';
import { UtilityService } from 'src/services/utility.service';

@Component({
  selector: 'app-trademark-instruction-registration',
  templateUrl: './trademark-instruction-registration.component.html',
  styleUrls: ['./trademark-instruction-registration.component.css']
})
export class TrademarkInstructionRegistrationComponent implements OnInit {

  Forms:Form = new Form();
  formMap = Form.formMap;
  stripFields = UtilityService.stripFieldsFromList
  trademark_particulars:any[];
  trademarkActionForm:any = {};
  listOfTrademarkActionForm:any[];
  is_new_action:boolean = false;
  actionList = [
    'amendment',
    'assignment-merger',
    'change-address',
    'procurement',
    'reclassification',
    'registration',
    'renewal',
    'search'
  ];
  trademarkActionFormDictionary =  {
    'amendment': this.Forms.T_amendmentActionCreateForm,
    'assignment-merger': this.Forms.T_assignmentMergerActionCreateForm,
    'change-address': this.Forms.T_changeOfAddressActionCreateForm,
    'procurement': this.Forms.T_procurementOfCertificateAction,
    'reclassification':{},
    'registration':{},
    'renewal':{},
    'search':{}
  }
  trademarkCreateForm = this.Forms.trademarkCreateForm // lots of work to be done in the form!
  current_action: any;
  constructor(public router: Router,
    private apiService: ApiService,
    private messageService: MessageService,
    public utilityService:UtilityService) { }

  ngOnInit(): void {
  }

}
