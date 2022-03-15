import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgIfNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';

const routes: Routes = [
  { path: 'index', component: DataBindingComponent },
  { path: 'forif', component: NgIfNgForComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
