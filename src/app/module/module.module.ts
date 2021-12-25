import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './module-routing.module';
import { InformationComponent } from './information/information.component';


@NgModule({
  declarations: [InformationComponent],
  imports: [
    CommonModule,
    InfoRoutingModule
  ],
})
export class InfoModule { }
