import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgIfNgForComponent } from './components/ng-if-ng-for/ng-if-ng-for.component';

const routes: Routes = [
  { path: 'index', component: DataBindingComponent },
  { path: 'forif', component: NgIfNgForComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
