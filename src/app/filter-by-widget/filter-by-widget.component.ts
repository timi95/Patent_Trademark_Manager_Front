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

  documents = [];
  orderTypeList:string[] = [];
  documentTypeUrl: string;
  // chosenOrderType:string = '';

  constructor(private utilityService: UtilityService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.utilityService.updateDocumentList();
    this.utilityService.documentListSubject.subscribe(resp=>{this.orderTypeList=Object.keys(resp[0])});

    this.utilityService.updateDocumentType();
    this.utilityService.documentTypeSubject.subscribe(resp=>{this.documentTypeUrl=this.patentActionUrlDict[resp]});
  }

  sort($event){
    console.log("sort by component call");
    this.apiService.orderPatentDocumentsByField(
      this.documentTypeUrl, 
      $event.target.value)
    .subscribe(resp =>{
      console.log('orderPatentDocumentsByField() called! response ==>', resp['results']);
      localStorage.setItem('documentList', JSON.stringify(resp['results']) );
      this.utilityService.updateDocumentList();
    });
  }
}
