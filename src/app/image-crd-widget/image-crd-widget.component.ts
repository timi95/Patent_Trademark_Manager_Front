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
    console.log("IMAGE: ",this.getImage("007ebaf8-5997-406c-8285-2c437655627c"));

  }

  deleteImage(id){

  }

  uploadImage($event){

  }

  getImage(id:string){
    let result;
    this.api.imageRequest("get", id)
    .subscribe((resp:any) => {
      // get a url from the backend
      // result = URL.createObjectURL(resp);
      console.log("Image response",result);
    });
    return result;
  }

  getImages(){
    this.api.imageRequest("get")
    .subscribe( resp => {console.log(resp);
    });
  }

}
