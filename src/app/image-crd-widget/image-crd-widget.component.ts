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
  @Input('id') instruction_id: string;

  baseUrl = "http://localhost:8080/Instruction/image/";
  active = false;
  deletingImage:InstructionImage = null;
  ImageFile:File;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getImages();
  }

  deleteImage(id){
    //summon delete modal
    this.api.imageRequest("delete", id)
    .subscribe( resp => {
      this.shunOverlay();
      console.log(resp);
    });
  }
  
  summonOverlay(image: InstructionImage){
    this.deletingImage = image;
    return this.active = true;
  }
  shunOverlay(){
    this.deletingImage = null;
    return this.active = false;
  }


  uploadImage(files: File[]){
    this.ImageFile = files[0];
  }

  submitImage(file?:File){
    var formData: any = new FormData();
    formData.append("img", this.ImageFile);
    
    this.api.imageRequest("post",this.instruction_id, formData,'patent')
    .subscribe(resp=> console.log(resp));
  }

   getImage(id:string): Observable<InstructionImage>{
    return this.api.imageRequest("get", id);
  }

  getImages(){
    this.api.imageRequest("get")
    .subscribe( resp => {console.log(resp);
    });
  }

}
