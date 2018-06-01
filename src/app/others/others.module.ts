import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OthersRoutingModule } from './others-routing.module';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { CustomHoverDirective } from './custom-hover.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimpleComponent } from './simple/simple.component';

@NgModule({
  imports: [
    CommonModule,
    OthersRoutingModule
  ],
  declarations: [
    NgSwitchCaseComponent,
    NgIfComponent,
    CustomHoverDirective,
    PageNotFoundComponent,
    SimpleComponent
  ]
})
export class OthersModule { }
