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
import { Form } from '../classes/Form';


@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  patent_particulars:any[];
  constructor(public utilityService:UtilityService) {   
  }

  ngOnInit(): void {
   this.patent_particulars = this.utilityService.toList(new Form().P_patent_particulars);
  }

  createDocument() {
  }


  viewDetails(item:Document){

  }


  deleteDocument(){
        
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