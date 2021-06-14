import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ApiService } from 'src/services/api.service';
import { InstructionImage } from '../interfaces/InstructionImage';

@Component({
  selector: 'image-crd-widget',
  templateUrl: './image-crd-widget.component.html',
  styleUrls: ['./image-crd-widget.component.css']
})
export class ImageCRDWidgetComponent implements OnInit {

  @Input('image-list') image_list: InstructionImage[];

  imageLink;
  constructor(private api: ApiService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getImages();
  }

  deleteImage(id){

  }

  uploadImage($event){
  }

   getImage(id:string): Observable<InstructionImage>{
    return this.api.imageRequest("get", id);
  }

  getImages(){
    this.api.imageRequest("get")
    .subscribe( resp => {console.log(resp);
    });
  }

  getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
