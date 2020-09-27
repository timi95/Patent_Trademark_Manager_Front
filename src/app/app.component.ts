import { Component } from "@angular/core";
import { Action } from './classes/Action';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  patent_ActionTypes = Object.keys(new Action().patentActionUrlDict);
  trademark_ActionTypes = Object.keys(new Action().trademarkActionUrlDict);

  title = "Patent-Trademark-Manager-Front";
}
