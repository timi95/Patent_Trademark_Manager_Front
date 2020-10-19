import { Component, HostListener, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { debounce, tap } from 'rxjs/operators';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'reminders',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent implements OnInit {
  reminders:any[] = [
    {
      title :'Reminder 1',
      reminder_detail:'Detailed instructions',
      reminder_date :'10-10-2020',
      manager_type :'Patent_manager',
      document_type:'AmmendmentAction',
      document_id:'2'
    },
    {
      title :'Reminder 2',
      reminder_detail:'Detailed instructions',
      reminder_date :'10-10-2020',
      manager_type :'Patent_manager',
      document_type:'AmmendmentAction',
      document_id:'2'
    },
    {
      title :'Reminder 3',
      reminder_detail:'Detailed instructions',
      reminder_date :'10-10-2020',
      manager_type :'Patent_manager',
      document_type:'AmmendmentAction',
      document_id:'2'
    },
    {
      title :'Reminder 4',
      reminder_detail:'Detailed instructions',
      reminder_date :'10-10-2020',
      manager_type :'Patent_manager',
      document_type:'AmmendmentAction',
      document_id:'2'
    }
  ]


  opened : boolean;
  isMobile : boolean;

  screenHeight:number;
  screenWidth:number;
  
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    // This is working but Reminders is empty atm
    this.apiService.documentRequest('reminder','get',null,null,'Reminders')
    .pipe(debounce(()=>timer(100)))
    .subscribe((resp:{result:any[]}) =>{this.reminders=resp.result});
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
