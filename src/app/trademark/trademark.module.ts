import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTrademarksComponent } from './view-trademarks/view-trademarks.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ViewTrademarksComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [ViewTrademarksComponent]

})
export class TrademarkModule { }
