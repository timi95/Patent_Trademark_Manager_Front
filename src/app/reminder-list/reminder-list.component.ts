import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { deepEqual } from 'assert';
import { time } from 'console';
import { interval, pipe, timer } from 'rxjs';
import { debounce, debounceTime, delay, distinctUntilChanged, repeat, retry, switchMap, tap } from 'rxjs/operators';
import { ApiService } from 'src/services/api.service';
import { UtilityService } from 'src/services/utility.service';
import { Action } from '../classes/Action';



@Component({
  selector: 'reminders',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})

export class ReminderListComponent implements OnInit {
    
  DELAY_TIME:number = 1000;
  reminders:any[] = []


  opened : boolean;
  isMobile : boolean;

  screenHeight:number;
  screenWidth:number;

  formType = 'create'
  managerType: string;
  documentTypeUrlDict: any;
  source = new EventSource('http://localhost:8080/Reminder/subscribe')

  
  constructor(
    private apiService: ApiService,
    public utilityService: UtilityService) { }

  ngOnInit(): void {
    this.source.onmessage = e => {
      console.log("reminder event:",e.data);
    }
    
    // this.apiService
    // .documentRequest('reminder','get',null,null,'Reminders')
    // .subscribe((resp:{results:Reminder[]})=>
    // {this.utilityService.updateReminderList(this.dateMod(resp.results))});


    // this.apiService
    // .documentRequest('reminder','get',null,null,'Reminders')
    // .pipe( 
    //   distinctUntilChanged((prvs:Object,crnt:Object):boolean=>{ 
    //     if(Object.values(prvs).length != Object.values(prvs).length)
    //       {return false;}
    //     if(JSON.stringify(prvs) != JSON.stringify(crnt))
    //       {return false;}
    //     Object.values(crnt).forEach((val,index)=>{
    //       if(val != Object.values(prvs)[index])
    //       {return false;}
    //     })
    //     return true;
    //   })
    // ,delay(this.DELAY_TIME*60),repeat() )
    // .subscribe((resp:{results:Reminder[]})=>
    // { this.utilityService.updateReminderList( this.dateMod(resp.results) )});
  }

  dateMod(reminder:Reminder[]):Reminder[] {
    let todays_date = new Date();    
    let result:Reminder[] = reminder;

    result.forEach(item =>{ 
      if(todays_date <= new Date(item.reminder_date) )
       {item.matured = true;}else{item.matured=false;} });
    return result;
  }

  refreshList(){
    this.apiService
    .documentRequest('reminder','get',null,null)
    .subscribe((resp:{results:Reminder[]})=>
    {this.utilityService.updateReminderList(resp.results)});
  }
  toggleList(){
    this.opened = !this.opened;
    // console.log(`toggle state: ${this.opened}`); 
  }
  reminderCreateForm(){
    this.formType = 'create';
    localStorage.setItem('managerType','Reminders')
    this.utilityService.updateManagerType();
    this.utilityService.setReminderCreateFormActive();
  }

  reminderEditForm(reminder:Reminder){
    this.formType = 'update';
    localStorage.setItem('managerType','Reminders')
    this.utilityService.updateManagerType();
    this.utilityService.setReminderEditFormActive();
    this.utilityService.loadReminder(reminder);
  }

  reminderDeleteDialogue(reminder:Reminder){
    localStorage.setItem('managerType','Reminders')
    this.utilityService.updateManagerType();
    this.formType = 'delete';
    this.utilityService.loadReminder(reminder);
    this.utilityService.setReminderDeleteFormActive();
  }

  updateReminder(){
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
export interface Reminder {
  id:any;
  title :string;
  reminder_detail:string;
  reminder_date :any;
  manager_type :string;
  document_type:string;
  document_id:string;
  matured?:boolean;
}