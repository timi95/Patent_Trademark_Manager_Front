import { Component, Input, OnInit } from '@angular/core';
import { InstructionImage } from '../interfaces/InstructionImage';

@Component({
  selector: 'image-crd-widget',
  templateUrl: './image-crd-widget.component.html',
  styleUrls: ['./image-crd-widget.component.css']
})
export class ImageCRDWidgetComponent implements OnInit {

  @Input('image-list') image_list: InstructionImage[];

  constructor() { }

  ngOnInit(): void {
  }

  deleteImage(id){

  }

  uploadImage($event){

  }

}
