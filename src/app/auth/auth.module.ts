import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    AppRoutingModule
  ],
})
export class AuthModule {}
