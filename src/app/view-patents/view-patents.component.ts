import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { repeat } from 'rxjs/operators';
import { ApiService } from 'src/services/api.service';
import { Patent } from '../classes/Instructions/Patent';
import { Instruction } from '../interfaces/Instruction';

@Component({
  selector: 'app-view-patents',
  templateUrl: './view-patents.component.html',
  styleUrls: ['./view-patents.component.css']
})
export class ViewPatentsComponent implements OnInit {
  patent$:any;
  constructor(
    public router: Router,
    public apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.documentRequest('patent','get')
    .subscribe( (resp:Patent) =>{
      this.patent$ = resp
      console.log(resp);
    })
  }

  navigateDetails(id){
    this.router.navigate([`detail/${id}`])
  }

}
