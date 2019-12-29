import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombosRoutingModule } from './combos-routing.module';
import { CombosComponent } from './combos.component';


@NgModule({
  declarations: [CombosComponent],
  imports: [
    CommonModule,
    CombosRoutingModule
  ]
})
export class CombosModule { }
