import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { MainContentComponent } from './main-content/main-content.component';


const routes: Routes = [
  { path:'detail/:id', component: DetailComponent },
  { path:'', component: MainContentComponent },
  { path:'main-content', component: MainContentComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
