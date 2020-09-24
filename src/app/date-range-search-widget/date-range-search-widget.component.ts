import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { UtilityService } from 'src/services/utility.service';
import { Action } from '../classes/Action';

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

  constructor(private utilityService: UtilityService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.utilityService.updateDocumentList();
    this.utilityService.documentListSubject.subscribe(resp=>{});

    this.utilityService.updateDocumentType();
    this.utilityService.documentTypeSubject.subscribe(resp=>{this.documentTypeUrl=this.patentActionUrlDict[resp]});
  }

  searchDateRange(){
    this.apiService.searchPatentDocumentsByDate(this.documentTypeUrl, this.from, this.till)
    .subscribe(resp =>{
      localStorage.setItem('documentList', JSON.stringify(resp['results']) );
      this.utilityService.updateDocumentList();
    });
  }

}
