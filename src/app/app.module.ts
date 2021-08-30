import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PatentActionListComponent } from './patent/patent-action-list/patent-action-list.component';
import { PatentModule } from './patent/patent.module';
import { RemindersOverlayComponent } from './reminders-overlay/reminders-overlay.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ReminderListComponent } from './reminder-list/reminder-list.component';
import { TrademarkModule } from './trademark/trademark.module';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ReminderListComponent,
    RemindersOverlayComponent,
  ],
  imports: [
    TrademarkModule,
    PatentModule,
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
