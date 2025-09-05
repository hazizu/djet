import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { AuthRoutingModule } from './auth.routing.module';
import { SharedModule } from "../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    RegisterSuccessComponent,
    ForgetPassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
]
})
export class AuthModule { }
