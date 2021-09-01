import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Action } from '../classes/Action';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/message.service';
import { UtilityService } from 'src/services/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'] })
export class SideNavComponent implements OnInit {
  @Input('title') title:string;
  // @Input('itemList') itemList:string[];
  // @Input('managerType') managerType:string;

  opened : boolean;
  isMobile : boolean;

  screenHeight:number;
  screenWidth:number;

  // Moving responsibility of document fetching to side nav

  patentActionUrlDict: any = new Action().patentActionUrlDict;
  trademarkActionUrlDict: any = new Action().trademarkActionUrlDict;
  documentType: any  = 'AmendmentAction';

  P_T_list_toggle:{Patentlist:boolean,Trademarklist:boolean} = {
    'Patentlist':true,
    'Trademarklist':false,
  }
  managerType:string = 'Patent_manager';
  pathList:any[] = [
    // { path:'', name:"Home"},
    { path:'register/trademark', name: 'Register a Trademark'},
    { path:'view/trademark',name:'View Trademarks'},
    { path:'register/patent', name:'Register a Patent'},
    { path:'view/patent', name:'View Patents'},
  ];


  constructor(
    private router:Router,
    private utilityService: UtilityService,
    private messageService: MessageService) {
    this.opened = window.innerWidth < 769? true : false;
    this.isMobile = window.innerWidth < 769? true : false;

  }
  

  ngOnInit(): void {
    localStorage.setItem('managerType',this.managerType);
    this.utilityService.updateManagerType();
  }

  fetchDocuments(value:string){
    localStorage.setItem('managerType',this.managerType);
    this.utilityService.updateManagerType();

    localStorage.setItem('documentType',value);
    this.utilityService.updateDocumentType();
    
    this.router.navigate(['']);
  }

  PTToggle(){
    this.P_T_list_toggle.Patentlist = !this.P_T_list_toggle.Patentlist;
    this.P_T_list_toggle.Trademarklist = !this.P_T_list_toggle.Trademarklist;
    this.managerType = this.P_T_list_toggle.Patentlist? 'Patent_manager':'Trademark_manager';
  }

  toggleList(){
    this.opened = !this.opened;
    // console.log(`toggle state: ${this.opened}`); 
  }
  
  @HostListener("window:resize", [])
  private onResize() {
      // console.log("This window has been resized")
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
      
      if ( this.screenWidth < 769 ) {
        this.opened = false;
        this.isMobile = true;
      } else {
        this.opened = true;
        this.isMobile = false;
      }
      // console.log(`screen height: ${this.screenHeight} screen width: ${this.screenWidth}`);
  }

  navigate(route?:string){
    if (!route || route == '')
    this.router.navigate(['']);

    this.router.navigate([route])
  }

}
