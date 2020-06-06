import { Component, OnInit, OnDestroy,AfterViewInit } from '@angular/core';
import { UtilityService } from 'src/services/utility.service';
import { AmendmentAction } from 'src/interfaces/AmendmentAction';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy, AfterViewInit {

  details:AmendmentAction;  
  ID: string;


  constructor(
    private router:Router,
    private activedRoute:ActivatedRoute,
    private apiService: ApiService,
    private utilityService:UtilityService) { 
      // this.utilityService.detailSubject.subscribe( data => {
      //   this.details = data;
      // } );

  }

  ngAfterViewInit(){

    
  }

  ngOnInit(): void {
    // this.utilityService.detailSubject.subscribe( data => {
    //   this.details = data;
    //   console.log("data",data)
    // } );

    // get the route info
    this.activedRoute.paramMap.subscribe(param=>{
      this.ID = param.get('id');
    });
    // fetch the date given the routing info
    console.log("Details",this.details);
    this.apiService.getAmendmentAction(this.ID).subscribe( data => {
      // this.details = data;
      console.log('data',data);
    });
  }

  ngOnDestroy(){
    // this.utilityService.detailSubject.unsubscribe();
  }


  navigateHome(){
    this.router.navigate(['']);
  }

}
