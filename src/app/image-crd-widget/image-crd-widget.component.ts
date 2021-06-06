import { Component, Input, OnInit } from '@angular/core';
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
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getImages();
    console.log("IMAGE: ",this.getImage("af96e49a-2fff-4f03-b11d-487a437067ea"));

  }

  deleteImage(id){

  }

  uploadImage($event){

  }

   getImage(id:string){
    this.api.imageRequest("get", id)
            .subscribe((resp:InstructionImage) => {
              console.log("Image response",resp) });

  }

  getImages(){
    this.api.imageRequest("get")
    .subscribe( resp => {console.log(resp);
    });
  }

}
