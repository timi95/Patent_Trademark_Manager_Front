import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PatentInstructionRegistrationComponent } from './patent-instruction-registration/patent-instruction-registration.component';
import { TrademarkInstructionRegistrationComponent } from './trademark-instruction-registration/trademark-instruction-registration.component';
import { ViewPatentsComponent } from './view-patents/view-patents.component';
import { ViewTrademarksComponent } from './view-trademarks/view-trademarks.component';


const routes: Routes = [
  { path:'', component: MainContentComponent },
  { path:'main-content', component: MainContentComponent },
  { path:'detail/:id', component: DetailComponent },
  { path:'view/trademark', component: ViewTrademarksComponent },
  { path:'view/patent', component: ViewPatentsComponent },
  { path:'register/trademark', component: TrademarkInstructionRegistrationComponent },
  { path:'register/patent', component: PatentInstructionRegistrationComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
