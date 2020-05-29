import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "overlay",
  templateUrl: "./overlay.component.html",
  styleUrls: ["./overlay.component.css"],
})
export class OverlayComponent implements OnInit {
  name = new FormControl("");

  constructor() {}

  ngOnInit(): void {}
}
