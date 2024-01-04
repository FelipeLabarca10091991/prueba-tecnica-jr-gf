import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { NavComponent } from './shared/nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/auth/login.service';
import { HttpClientModule } from '@angular/common/http';
import { SecretPageComponent } from './pages/secret-page/secret-page.component';
import { UserService } from './services/user/user.service';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { GuardService } from './auth/guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    NavComponent,
    SecretPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService,UserService,GuardService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
