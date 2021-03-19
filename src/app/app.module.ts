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
import { RemindersOverlayComponent } from './reminders-overlay/reminders-overlay.component';
import { Form } from './classes/Form';
import { PatentInstructionRegistrationComponent } from './patent-instruction-registration/patent-instruction-registration.component';
import { TrademarkInstructionRegistrationComponent } from './trademark-instruction-registration/trademark-instruction-registration.component';
import { ViewTrademarksComponent } from './view-trademarks/view-trademarks.component';
import { ViewPatentsComponent } from './view-patents/view-patents.component';
import { DeleteOverlayComponent } from './delete-overlay/delete-overlay.component';
import { PatentActionListComponent } from './patent-action-list/patent-action-list.component';

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
    RemindersOverlayComponent,
    PatentInstructionRegistrationComponent,
    TrademarkInstructionRegistrationComponent,
    ViewTrademarksComponent,
    ViewPatentsComponent,
    DeleteOverlayComponent,
    PatentActionListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PatentActionListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
