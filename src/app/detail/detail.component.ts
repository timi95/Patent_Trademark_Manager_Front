import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilityService } from 'src/services/utility.service';
import { AmendmentAction } from 'src/interfaces/AmendmentAction';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { Action } from '../classes/Action';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  details:any;
  documentType: string;
  detailsAsList:any=[];
  ID: string;
  detailEditIsActive:boolean;
  detailDeleteIsActive:boolean;

  overlayFormType: string;
  documentTypeUrlDict: any = new Action().patentActionUrlDict;


  constructor(
    private router:Router,
    private activedRoute:ActivatedRoute,
    public utilityService:UtilityService) {      
    }


    ngOnInit(): void {     
    console.log(`detailEditIsActive state: ${this.detailEditIsActive}`);
    // get the details from localStorage
    this.details = JSON.parse(localStorage.getItem('detailsObject'));
    this.detailsAsList = this.utilityService.toList(this.details);
    this.documentType = localStorage.getItem('documentType');

    this.utilityService.managerTypeSubject.subscribe(resp=>{
      this.documentTypeUrlDict = resp =='Patent_manager'?
      new Action().patentActionUrlDict:
      new Action().trademarkActionUrlDict;
    });

    // this.utilityService.setDetailEditFormInactive();
    this.utilityService.detailEditFormActive.subscribe( bool => {
      this.detailEditIsActive = bool;
    });
    
    // this.utilityService.setDetailDeleteFormInactive();
    this.utilityService.detailDeleteFormActive.subscribe( bool => {
      this.detailEditIsActive = bool;
    });

    // get the route info
    this.activedRoute.paramMap.subscribe(param=>{
      this.ID = param.get('id');
    });


  }

  ngOnDestroy(){
    // this.utilityService.detailSubject.unsubscribe();
    // this.utilityService.detailEditFormActive.unsubscribe();
  }


  navigateHome(){   
    this.router.navigate(['']);
  }

  editDocument(){
    this.overlayFormType = 'update';
    this.utilityService.setDetailEditFormActive();
    // console.log(`detailEditIsActive state: ${this.detailEditIsActive}`);
  }

  deleteDocument(){
    this.overlayFormType = 'delete';
    this.utilityService.setDetailDeleteFormActive();
    // console.log(`detailDeleteIsActive state: ${this.detailDeleteIsActive}`);
    
  }
}
