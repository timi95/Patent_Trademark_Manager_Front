import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trademark } from 'src/app/classes/Instructions/Trademark';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-view-trademarks',
  templateUrl: './view-trademarks.component.html',
  styleUrls: ['./view-trademarks.component.css']
})
export class ViewTrademarksComponent implements OnInit {
  trademark$: any;
  constructor(
    public router: Router,
    private apiService: ApiService ) { }

  ngOnInit(): void {
    this.apiService.documentRequest('trademark','get')
    .subscribe( (resp:any) =>{
      this.trademark$ = resp
    });
  }

  navigateDetails(id){
    this.router.navigate([`detail/${id}`])
  }
}
