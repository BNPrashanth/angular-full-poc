import { NgModule } from '@angular/core';

import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    AppRoutingModule
  ]
})
export class CoreModule {}
