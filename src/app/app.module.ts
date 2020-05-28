import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponentComponent } from './main-content-component/main-content-component.component';
import { HeaderContentComponent } from "./single-file-components/header-content.component";
import { FoterContentComponent } from "./single-file-components/footer-content.component";
import { SideNavComponent } from './side-nav/side-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { SuccessMessageComponent } from './success-message/success-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponentComponent,
    FoterContentComponent,
    HeaderContentComponent,
    SideNavComponent,
    ErrorMessageComponent,
    SuccessMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
