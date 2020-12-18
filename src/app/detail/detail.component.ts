import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilityService } from 'src/services/utility.service';
import { AmendmentAction } from 'src/interfaces/AmendmentAction';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { Action } from '../classes/Action';
import { Patent } from '../classes/Instructions/Patent';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  patentID: string;
  patent$: Patent;
  listOfPatent: any[];
  is_editing: string = '';
  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    public apiService: ApiService) {
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        console.log(params['id']);
        this.patentID = params['id'];
      }
      );
      this.apiService.documentRequest("patent","get", this.patentID)
      .subscribe( (patent: Patent) => {
        this.patent$ = patent;
        this.listOfPatent = Object.entries(patent);
    });
  }

  ngOnDestroy(){

  }

  toggleEdit(prop){
    console.log('toggling edit for property:',prop);
    this.is_editing = prop
  }
  cancelEdit(){
    this.is_editing = ''
  }

  viewPatents(){
    this.router.navigate(['view/patent'])
  }
  navigateHome(){   
    this.router.navigate(['']);
  }


}
