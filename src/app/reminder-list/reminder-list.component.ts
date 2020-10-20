import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { interval, pipe, timer } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, repeat, retry, switchMap, tap } from 'rxjs/operators';
import { ApiService } from 'src/services/api.service';
import { UtilityService } from 'src/services/utility.service';
import { Action } from '../classes/Action';

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

  formType = 'reminder-create'
  reminderForm = {
    title: new FormControl('', [Validators.required]),
    reminder_detail: new FormControl('', [Validators.required]),
    reminder_date: "",
    manager_type: new FormControl('', [Validators.required]),
    document_type: new FormControl('', [Validators.required]),
    document_id: new FormControl('', [Validators.required]),
  }
  managerType: string;
  documentTypeUrlDict: any;
  
  constructor(
    private apiService: ApiService,
    public utilityService: UtilityService) { }

  ngOnInit(): void {

    this.utilityService.managerTypeSubject.subscribe(resp=>{ this.managerType = resp });

    // This is working but Reminders is empty atm
    this.apiService
    .documentRequest('reminder','get',null,null,'Reminders')
    .pipe( distinctUntilChanged(),retry(), )
    // .subscribe((resp:{result:any[]})=> this.reminders=resp.result );
      
  }

  toggleList(){
    this.opened = !this.opened;
    // console.log(`toggle state: ${this.opened}`); 
  }
  createReminderForm(){
    // do work to summon a special overlay for creating and updating reminders
    this.utilityService.setReminderCreateFormActive();
  }
  createReminder(){
    this.apiService
    .documentRequest('reminder','post',null,this.reminderForm,'Reminders')
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
