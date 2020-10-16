import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'reminders',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent implements OnInit {
  reminders:any[] = [
    {title:'Reminder 1', details:' Detailed instructions'},
    {title:'Reminder 2', details:' Detailed instructions'},
    {title:'Reminder 3', details:' Detailed instructions'},
  ]

  opened : boolean;
  isMobile : boolean;

  screenHeight:number;
  screenWidth:number;
  
  constructor() { }

  ngOnInit(): void {
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
}
