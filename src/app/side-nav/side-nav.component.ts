import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  itemList:string[];


  constructor() {
    this.itemList = ['item 1','item 2', 'item 3'];
  }

  ngOnInit(): void {
  }

}
