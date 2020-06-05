import { Component, OnInit, OnDestroy,AfterViewInit } from '@angular/core';
import { UtilityService } from 'src/services/utility.service';
import { AmendmentAction } from 'src/interfaces/AmendmentAction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy, AfterViewInit {

  details:AmendmentAction;  


  constructor(
    private router:Router,
    private utilityService:UtilityService) { 
      this.utilityService.detailSubject.subscribe( data => {
        this.details = data;
      } );
  }

  ngAfterViewInit(){
    console.log("Details",this.details);
    
  }

  ngOnInit(): void {
    this.utilityService.detailSubject.subscribe( data => {
      this.details = data;
      console.log("data",data)
    } );
  }

  ngOnDestroy(){
    // this.utilityService.detailSubject.unsubscribe();
  }


  navigateHome(){
    this.router.navigate(['']);
  }

}
