import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTrademarksComponent } from './view-trademarks/view-trademarks.component';



@NgModule({
  declarations: [ViewTrademarksComponent],
  exports: [ViewTrademarksComponent],
  imports: [
    CommonModule
  ]
})
export class TrademarkModule { }
