import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { UtilityService } from 'src/services/utility.service';
import { Action } from '../../classes/Action';

@Component({
  selector: 'date-search',
  templateUrl: './date-range-search-widget.component.html',
  styleUrls: ['./date-range-search-widget.component.css']
})
export class DateRangeSearchWidgetComponent implements OnInit {
  from:string;
  till:string;
  
  documentTypeUrl: any;
  patentActionUrlDict: any = new Action().patentActionUrlDict;
  trademarkActionUrlDict: any = new Action().trademarkActionUrlDict;
  managerType:string = 'Patent_manager';

  constructor(private utilityService: UtilityService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.utilityService.updateManagerType();
    this.utilityService.managerTypeSubject.subscribe(resp=>{this.managerType = resp;});

    this.utilityService.updateDocumentList();
    this.utilityService.documentListSubject.subscribe(resp=>{});

    this.utilityService.updateDocumentType();
    this.utilityService.documentTypeSubject.subscribe(resp=>{
      this.documentTypeUrl = (this.managerType == 'Patent_manager')?
      this.patentActionUrlDict[resp]: this.trademarkActionUrlDict[resp];});
  }

  searchDateRange(){
    this.apiService
    .searchPatentDocumentsByDate(this.documentTypeUrl, this.from, this.till, this.managerType)
    .subscribe(resp =>{
      localStorage.setItem('documentList', JSON.stringify(resp['results']));
      this.utilityService.updateDocumentList();
    });
  }

}
