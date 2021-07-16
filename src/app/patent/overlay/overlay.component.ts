import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { FormControl, FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ApiService } from "src/services/api.service";
import { MessageService } from "src/services/message.service";
import { UtilityService } from 'src/services/utility.service';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Form } from '../../classes/Form';


@Component({
  selector: "overlay",
  templateUrl: "./overlay.component.html",
  styleUrls: ["./overlay.component.css"],
})
export class OverlayComponent implements OnInit {
   constructor() {
    }
    

  ngOnInit(): void {

  }
  ngOnChanges(): void {
  }

 
  



}


