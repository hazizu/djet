import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterSuccessComponent } from './mains/auth/register-success/register-success.component';
import { LocalisationMapComponent } from './shared/components/localisation-map/localisation-map.component';
import { LocalisationComponent } from './shared/components/localisation/localisation.component';

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
    path:'inscription-reussie', component:RegisterSuccessComponent,
},
  {
    path: 'localisation', component: LocalisationComponent
  },
   {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled',anchorScrolling: 'enabled', scrollOffset: [0, 0]})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
