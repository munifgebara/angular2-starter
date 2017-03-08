import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';

import {AutoCompleteModule} from 'primeng/primeng';


import { LoginService } from './login/login.service';
import { LoggedInGuard } from './login/logged-in.guard';
import { LoginFormComponent } from './login/login-form.component';
import { AppComponent } from './app.component';
import { PrincipalService } from './principal/principal.service';
import { PrincipalComponent } from './principal/principal.component';


@NgModule({
  imports: [BrowserModule, FormsModule, routing,HttpModule,JsonpModule,AutoCompleteModule],
  declarations: [
    AppComponent,
    LoginFormComponent,
    PrincipalComponent
  ],
  providers: [
    PrincipalService,
    LoginService,
    LoggedInGuard
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
