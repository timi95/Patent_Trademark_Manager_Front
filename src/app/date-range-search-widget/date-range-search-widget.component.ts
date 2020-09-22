import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date-search',
  templateUrl: './date-range-search-widget.component.html',
  styleUrls: ['./date-range-search-widget.component.css']
})
export class DateRangeSearchWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchDateRange(from?,till?){
    console.log('date range search called');
    
  }

}
