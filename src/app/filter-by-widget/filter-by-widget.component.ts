import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestObject } from 'protractor/built/driverProviders';
import { ApiService } from 'src/services/api.service';
import { UtilityService } from 'src/services/utility.service';
import { Action } from '../classes/Action';

@Component({
  selector: 'filter-by',
  templateUrl: './filter-by-widget.component.html',
  styleUrls: ['./filter-by-widget.component.css']
})
export class FilterByWidgetComponent implements OnInit {
  
  patentActionUrlDict: any = new Action().patentActionUrlDict;
  trademarkActionUrlDict: any = new Action().trademarkActionUrlDict;

  documents = [];
  orderTypeList:string[] = [];
  documentTypeUrl: string;
  managerType:string = 'Patent_manager';
  // chosenOrderType:string = '';

  constructor(private utilityService: UtilityService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.utilityService.updateManagerType();
    this.utilityService.managerTypeSubject.subscribe(resp=>{this.managerType = resp});
    this.utilityService.updateDocumentList();
    this.utilityService.documentListSubject.subscribe(resp=>{ 
      this.orderTypeList=resp[0]?Object.keys(resp[0]):[];});

    this.utilityService.updateDocumentType();
    this.utilityService.documentTypeSubject.subscribe(resp=>{
      this.documentTypeUrl = (this.managerType == 'Patent_manager')?
      this.patentActionUrlDict[resp]: this.trademarkActionUrlDict[resp];});
  }

  sort($event){
    // console.log("sort by component call");
    this.apiService.orderPatentDocumentsByField(
      this.documentTypeUrl, 
      $event.target.value,
      this.managerType)
    .subscribe(resp =>{
      // console.log('orderPatentDocumentsByField() called! response ==>', resp['results']);
      localStorage.setItem('documentList', JSON.stringify(resp['results']) );
      this.utilityService.updateDocumentList();
    });
  }
}
