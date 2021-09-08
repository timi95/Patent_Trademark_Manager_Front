import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangeSearchWidgetComponent } from './date-range-search-widget/date-range-search-widget.component';
import { DeleteOverlayComponent } from './delete-overlay/delete-overlay.component';
import { DetailComponent } from './detail/detail.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { FilterByWidgetComponent } from './filter-by-widget/filter-by-widget.component';
import { ImageCRDWidgetComponent } from './image-crd-widget/image-crd-widget.component';
import { MainContentComponent } from './main-content/main-content.component';
import { OverlayComponent } from './overlay/overlay.component';
import { PatentActionListComponent } from './patent-action-list/patent-action-list.component';
import { PatentInstructionRegistrationComponent } from './patent-instruction-registration/patent-instruction-registration.component';
import { FooterContentComponent } from './single-file-components/footer-content.component';
import { HeaderContentComponent } from './single-file-components/header-content.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { TrademarkInstructionRegistrationComponent } from '../trademark/trademark-instruction-registration/trademark-instruction-registration.component';
import { ViewPatentsComponent } from './view-patents/view-patents.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PureCallPipe } from './pipes/pure-call.pipe';


@NgModule({
  declarations: [
    MainContentComponent,
    FooterContentComponent,
    HeaderContentComponent,
    ErrorMessageComponent,
    SuccessMessageComponent,
    OverlayComponent,
    DetailComponent,
    PureCallPipe,
    FilterByWidgetComponent,
    DateRangeSearchWidgetComponent,
    PatentInstructionRegistrationComponent,
    TrademarkInstructionRegistrationComponent,
    ViewPatentsComponent,
    DeleteOverlayComponent,
    PatentActionListComponent,
    ImageCRDWidgetComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    MainContentComponent,
    FooterContentComponent,
    HeaderContentComponent,
    ErrorMessageComponent,
    SuccessMessageComponent,
    OverlayComponent,
    DetailComponent,
    PureCallPipe,
    FilterByWidgetComponent,
    DateRangeSearchWidgetComponent,
    PatentInstructionRegistrationComponent,
    TrademarkInstructionRegistrationComponent,
    ViewPatentsComponent,
    DeleteOverlayComponent,
    PatentActionListComponent,
    ImageCRDWidgetComponent,
  ],
  providers: [PatentActionListComponent],
})
export class PatentModule { }
