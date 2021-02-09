import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilityService } from 'src/services/utility.service';
import { AmendmentAction } from 'src/interfaces/AmendmentAction';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { Action } from '../classes/Action';
import { Patent } from '../classes/Instructions/Patent';
import { delay, distinctUntilChanged, repeat, switchMap } from 'rxjs/operators';
import { MessageService } from 'src/services/message.service';

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
  delete_is_active:boolean;
  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    public utilityService: UtilityService,
    public apiService: ApiService) {
  }


  ngOnInit(): void {
    this.utilityService.setDeleteOverlayInactive();
    this.utilityService.deleteOverlaySubject
    .subscribe(resp =>{
      this.delete_is_active = resp;
    });
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

  saveChanges(){
    console.log("Current conversion: ",Object.fromEntries(this.listOfPatent));
    this.apiService
    .documentRequest("patent","put",this.patentID,Object.fromEntries(this.listOfPatent))
    .pipe(
      switchMap( (resp:Patent)=>{
        return this.apiService.documentRequest("patent","get", resp.id)
      }) )
      .subscribe( (patent: Patent) => {
        this.patent$ = patent;
        this.listOfPatent = Object.entries(patent);
        this.cancelEdit();
        this.messageService.pushSuccess(`Successfully Edited patent with ID:${patent.id}`);
    }, error =>{
      this.messageService.pushError(`Error occured ${error}`)
    });
    
  }

  summonDeleteOverlay(){
    console.log('summoning delete overlay');
    this.utilityService.setDeleteOverlayActive();
    this.utilityService.deleteOverlaySubject
    .subscribe(resp=>{
      this.delete_is_active = resp;
    });
  }

}
