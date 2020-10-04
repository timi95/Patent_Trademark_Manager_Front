import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderContentComponent } from "./single-file-components/header-content.component";
import { FooterContentComponent } from "./single-file-components/footer-content.component";
import { SideNavComponent } from './side-nav/side-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { OverlayComponent } from './overlay/overlay.component';
import { DetailComponent } from './detail/detail.component';
import { PureCallPipe } from './pipes/pure-call.pipe';
import { FilterByWidgetComponent } from './filter-by-widget/filter-by-widget.component';
import { DateRangeSearchWidgetComponent } from './date-range-search-widget/date-range-search-widget.component';
import { ReminderListComponent } from './reminder-list/reminder-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    FooterContentComponent,
    HeaderContentComponent,
    SideNavComponent,
    ErrorMessageComponent,
    SuccessMessageComponent,
    OverlayComponent,
    DetailComponent,
    PureCallPipe,
    FilterByWidgetComponent,
    DateRangeSearchWidgetComponent,
    ReminderListComponent,
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
