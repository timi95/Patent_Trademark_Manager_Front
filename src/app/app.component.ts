import { Component } from "@angular/core";
import { Action } from './classes/Action';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  patent_ActionTypes = new Action().patent_ActionTypes;
  trademark_ActionTypes = new Action().trademark_ActionTypes;

  title = "Patent-Trademark-Manager-Front";
}
