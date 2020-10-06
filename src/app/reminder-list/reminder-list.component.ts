import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reminders',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent implements OnInit {
  reminders:any[] = [
    {title:'Reminder 1', details:' Detailed instructions'},
    {title:'Reminder 2', details:' Detailed instructions'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
