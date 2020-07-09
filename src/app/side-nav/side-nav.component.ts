import { Component, OnInit, Input, HostListener } from '@angular/core';

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

  constructor() {
    this.itemList = ['item 1','item 2', 'item 3'];
    this.opened = window.innerWidth < 769? true : false;
    this.isMobile = window.innerWidth < 769? true : false;

  }
  

  ngOnInit(): void {



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
