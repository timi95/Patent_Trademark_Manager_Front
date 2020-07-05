import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilityService } from 'src/services/utility.service';
import { AmendmentAction } from 'src/interfaces/AmendmentAction';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  details:any;
  detailsAsList:any=[];
  ID: string;
  detailEditIsActive:boolean;
  detailDeleteIsActive:boolean;

  overlayFormType: string;


  constructor(
    private router:Router,
    private activedRoute:ActivatedRoute,
    private apiService: ApiService,
    public utilityService:UtilityService) {      
    }


  ngOnInit(): void {
    console.log('Detail component initialised!');
    
    // this.details = window.history.state.data ;
    // console.log("window history state", window.history.state.data);
    

    this.utilityService.setDetailEditFormInactive();
    this.utilityService.detailEditFormActive.subscribe( bool => {
      this.detailEditIsActive = bool;
    });

    this.utilityService.setDetailDeleteFormInactive();
    this.utilityService.detailDeleteFormActive.subscribe( bool => {
      this.detailEditIsActive = bool;
    });

    // get the route info
    this.activedRoute.paramMap.subscribe(param=>{
      this.ID = param.get('id');
    });

    // get the details from the detailSubject
    this.utilityService.detailSubject.subscribe( data => {
      // check if the subject is empty, if it is then navigate back home
      if (Object.keys(data).length == 0) {
        this.navigateHome();
      }
      this.details = data;
      console.log("data",data)
    } );

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
    this.utilityService.detailEditFormActive.subscribe( bool => {
      this.detailEditIsActive = bool;
    });
    console.log(`detailEditIsActive state: ${this.detailEditIsActive}`);
  }

  deleteDocument(){
    this.overlayFormType = 'delete';
    this.utilityService.setDetailDeleteFormActive();
    this.utilityService.detailDeleteFormActive.subscribe( bool => {
      this.detailDeleteIsActive = bool;
    });
    console.log(`detailDeleteIsActive state: ${this.detailDeleteIsActive}`);
    
  }
}
