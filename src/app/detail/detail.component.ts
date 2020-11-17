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

  constructor(private router:Router) {
  }


  ngOnInit(): void {
    
  }

  ngOnDestroy(){

  }


  navigateHome(){   
    this.router.navigate(['']);
  }


}
