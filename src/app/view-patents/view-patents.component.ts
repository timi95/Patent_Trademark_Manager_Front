import { Component, OnInit } from '@angular/core';
import { repeat } from 'rxjs/operators';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-view-patents',
  templateUrl: './view-patents.component.html',
  styleUrls: ['./view-patents.component.css']
})
export class ViewPatentsComponent implements OnInit {

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.documentRequest('patent','get')
    // .pipe(repeat(3))
    .subscribe( resp =>{console.log(resp);
    })
  }

}
