import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SecretPageComponent } from './pages/secret-page/secret-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { authGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'inicio',component:DashboardComponent},
  {path:'iniciar-sesion', component:LoginComponent},
  //{path:'secret-page',component:SecretPageComponent,canActivate:[authGuard]},
  {path:'secret-page',component:SecretPageComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
