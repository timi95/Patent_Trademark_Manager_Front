import { Component, OnInit } from '@angular/core';
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
  // patent$:Observable;
  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    // this.patent$ = this.apiService.documentRequest('patent','get')
    // .pipe(repeat(3))
    // .subscribe( (resp:Patent) =>{console.log(resp);
    // })
  }

}
