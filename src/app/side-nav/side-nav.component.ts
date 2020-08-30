import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Action } from '../classes/Action';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/message.service';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  itemList:string[];
  opened : boolean;
  isMobile : boolean;

  screenHeight:number;
  screenWidth:number;

  // Moving responsibility of document fetching to side nav
  patent_ActionTypes = new Action().patent_ActionTypes;
  patentActionUrlDict: any = new Action().patentActionUrlDict;
  documentType: any  = 'AmendmentAction';


  constructor(
    private apiService: ApiService,
    private messageService: MessageService) {
    this.itemList = ['item 1','item 2', 'item 3'];
    this.opened = window.innerWidth < 769? true : false;
    this.isMobile = window.innerWidth < 769? true : false;

  }
  

  ngOnInit(): void {

    this.apiService.patentDocumentRequest(
      this.patentActionUrlDict['AmendmentAction'],
      "get").subscribe((response:any) => {
        
        this.messageService.pushSuccess(`Successfully fetched ${this.documentType}s!`);
        // assign results to our list in storage
        localStorage.setItem('documentList',JSON.stringify(response.results)); 
      }, err => {
          console.log(err);
          this.messageService.pushError(err);
          // this.messages.add(err);
      });

  }


  toggleList(){
    this.opened = !this.opened;
    console.log(`toggle state: ${this.opened}`);
    
  }

  @HostListener("window:resize", [])
  private onResize() {
      console.log("This window has been resized")
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


}
