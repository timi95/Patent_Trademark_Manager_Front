import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-view-patents',
  templateUrl: './view-patents.component.html',
  styleUrls: ['./view-patents.component.css']
})
export class ViewPatentsComponent implements OnInit {
  patent$: any;
  constructor(
    public router: Router,
    public apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.documentRequest('patent','get')
    .subscribe( (resp:any) =>{
      this.patent$ = resp
    });
  }

  navigateDetails(id){
    this.router.navigate([`detail/${id}`])
  }

}
