import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry } from 'rxjs/operators';;
import { ApiService } from 'src/services/api.service';
import { UtilityService } from 'src/services/utility.service';
import { Reminder } from '../classes/Reminder';


@Component({
  selector: 'reminders',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ReminderListComponent implements OnInit {
    
  DELAY_TIME:number = 1000;
  reminders:Reminder[];


  opened : boolean;
  isMobile : boolean;

  screenHeight:number;
  screenWidth:number;

  formType = 'create'
  managerType: string;
  documentTypeUrlDict: any;

  
  constructor(
    private ref: ChangeDetectorRef,
    private apiService: ApiService,
    public utilityService: UtilityService) { }

  ngOnInit(): void {

    this.utilityService.reminderListSubject
    .subscribe((resp:Reminder[])=>{ this.reminders = resp; 
    this.ref.detectChanges()});

    this.getSource(`http://${this.apiService.API_URL}/Reminder/subscribe`)
    .pipe(retry(5))
    .subscribe(e => {
      console.log("reminder event:",e.data);
      this.utilityService.appendReminderToList(JSON.parse(e.data))
    });

    this.apiService
    .documentRequest('reminder','get',null,null,"Reminder")
    .subscribe((resp:{content:Reminder[]})=>
    { this.utilityService.updateReminderList(resp.content) });
    
    this.utilityService.reminderDeleteSubject
    .subscribe(()=>this.utilityService.updateReminderList(this.reminders))
  }


  refreshList(){
    this.apiService
    .documentRequest('reminder','get',null,null,"Reminder")
    .subscribe((resp:{results:Reminder[]})=>
    {this.utilityService.updateReminderList(resp.results)});
  }
  toggleList(){
    this.opened = !this.opened;
  }
  reminderCreateForm(){
    this.formType = 'create';
    localStorage.setItem('managerType','Reminder')
    this.utilityService.updateManagerType();
    this.utilityService.setReminderCreateFormActive();
  }

  reminderEditForm(reminder:Reminder){
    this.formType = 'update';
    localStorage.setItem('managerType','Reminder')
    this.utilityService.updateManagerType();
    this.utilityService.setReminderEditFormActive();
    this.utilityService.loadReminder(reminder);
  }

  reminderDeleteDialogue(reminder:Reminder){
    localStorage.setItem('managerType','Reminder')
    this.utilityService.updateManagerType();
    this.formType = 'delete';
    this.utilityService.loadReminder(reminder);
    this.utilityService.setReminderDeleteFormActive();
  }

  updateReminder(){
  }


  // Rob's method
  public getSource(url: string): Observable<MessageEvent> {
    return new Observable<MessageEvent>(
    (subscriber: Subscriber<MessageEvent>) => {
      const sse = new EventSource(url);
    
      sse.onmessage = e => subscriber.next(e);
      sse.onerror = e => subscriber.error(e);

      return () => {
        if (sse.readyState === 1) {
            sse.close();
        }
      }

    });
  }

  @HostListener("window:resize", [])
  private onResize() {
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
