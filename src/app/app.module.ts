import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponentComponent } from './main-content-component/main-content-component.component';
import { HeaderContentComponent } from "./single-file-components/header-content.component";
@NgModule({
  declarations: [
    AppComponent,
    MainContentComponentComponent,
    HeaderContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
