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

  sort(){
    console.log("sort by component call");
    
  }
}
