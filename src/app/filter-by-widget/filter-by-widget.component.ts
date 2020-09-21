import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter-by',
  templateUrl: './filter-by-widget.component.html',
  styleUrls: ['./filter-by-widget.component.css']
})
export class FilterByWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  filter(){
    console.log("filter by component call");
    
  }
}
