import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponentComponent } from './main-content-component/main-content-component.component';
import { HeaderContentComponent } from "./single-file-components/header-content.component";
import { FooterContentComponent } from "./single-file-components/footer-content.component";
import { SideNavComponent } from './side-nav/side-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { OverlayComponent } from './overlay/overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponentComponent,
    FooterContentComponent,
    HeaderContentComponent,
    SideNavComponent,
    ErrorMessageComponent,
    SuccessMessageComponent,
    OverlayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
