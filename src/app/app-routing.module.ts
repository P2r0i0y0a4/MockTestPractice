import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Q49RoutingComponent } from './q49-routing/q49-routing.component';
import { Q51RouteParamComponent } from './q51-route-param/q51-route-param.component';
import { Q52ProgrammaticNavigationComponent } from './q52-programmatic-navigation/q52-programmatic-navigation.component';
import { Q54NestedChildComponent } from './q54-nested-child/q54-nested-child.component';
import { Q54NestedRoutesComponent } from './q54-nested-routes/q54-nested-routes.component';
import { Q55QueryParamsComponent } from './q55-query-params/q55-query-params.component';
import { MockComponent } from './mock/mock.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: Q49RoutingComponent },
  { path: 'mock', component: MockComponent },
  { path: 'question/:id', component: Q51RouteParamComponent },
  { path: 'submitted', component: Q52ProgrammaticNavigationComponent },
  { path: 'query-demo', component: Q55QueryParamsComponent },
  { path: 'nested', component: Q54NestedRoutesComponent, children: [
    { path: 'child', component: Q54NestedChildComponent }
  ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
