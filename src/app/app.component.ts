import { Component } from '@angular/core';
import { HeaderContentComponent } from "./single-file-components/header-content.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Patent-Trademark-Manager-Front';
}
