import { Component, OnInit } from '@angular/core';
import { Trademark } from 'src/app/classes/Instructions/Trademark';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-view-trademarks',
  templateUrl: './view-trademarks.component.html',
  styleUrls: ['./view-trademarks.component.css']
})
export class ViewTrademarksComponent implements OnInit {
  trademark$: Trademark;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.documentRequest('trademark','get')
    .subscribe( (resp:Trademark) =>{
      this.trademark$ = resp
    });
  }

}
