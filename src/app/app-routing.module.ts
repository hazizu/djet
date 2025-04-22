import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./core/core/core.module').then(m => m.CoreModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./mains/auth/auth.module').then(m => m.AuthModule)
  },
   {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
