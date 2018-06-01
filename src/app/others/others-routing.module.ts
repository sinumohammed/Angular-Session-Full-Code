import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgIfComponent } from './ng-if/ng-if.component';

const routes: Routes = [
  {
    path: '',
    children: [
     
      {
        path: '',
        component: NgSwitchCaseComponent
      },
      {
        path: 'if',
        component: NgIfComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersRoutingModule { }
