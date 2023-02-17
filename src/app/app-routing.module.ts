import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/authentification/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/:login',
    pathMatch: 'full'
  },
  {
    path: 'auth/:login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
