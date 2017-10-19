import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LosangelesComponent} from './losangeles/losangeles.component'
import {SanjoseComponent} from './sanjose/sanjose.component'
import {SeattleComponent} from './seattle/seattle.component'
import {DallasComponent} from './dallas/dallas.component'
import {WashingtonComponent} from './washington/washington.component'
import {ChicagoComponent} from './chicago/chicago.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SanjoseComponent,
    children: []
  },
  {
    path: 'losangeles',
    pathMatch: 'full',
    component: LosangelesComponent,
    children: []
  },
  {
    path: 'sanjose',
    pathMatch: 'full',
    component: SanjoseComponent,
    children: []
  },
  {
    path: 'seattle',
    pathMatch: 'full',
    component: SeattleComponent,
    children: []
  },
  {
    path: 'dallas',
    pathMatch: 'full',
    component: DallasComponent,
    children: []
  },
  {
    path: 'washington',
    pathMatch: 'full',
    component: WashingtonComponent,
    children: []
  },
  {
    path: 'chicago',
    pathMatch: 'full',
    component: ChicagoComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
