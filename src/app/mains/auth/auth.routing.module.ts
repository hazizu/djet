import { Component, inject, NgModule } from "@angular/core";

import { Route, RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { RegisterSuccessComponent } from "./register-success/register-success.component";

const routes:Routes = [
    {
        path: '',  component:AuthComponent,
        children: [
            {
                path:'login', component: LoginComponent
            },
            {
                path: 'inscription', component: RegisterComponent

            },
            {
                path: '**', redirectTo: 'login'
            }
            // Lazi loading des différents modules
        ]
    },
   
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})  
export class AuthRoutingModule {}