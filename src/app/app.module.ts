import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageDesktopComponent } from './pages/login/login-page-desktop/login-page-desktop.component';
import { LoginPageTabletComponent } from './pages/login/login-page-tablet/login-page-tablet.component';
import { LoginPageMobileComponent } from './pages/login/login-page-mobile/login-page-mobile.component';
import { AppHeaderDesktopComponent } from './components/headers/app-header-desktop/app-header-desktop.component';
import { AppHeaderTabletComponent } from './components/headers/app-header-tablet/app-header-tablet.component';
import { AppHeaderMobileComponent } from './components/headers/app-header-mobile/app-header-mobile.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { AppHeaderComponent } from './components/headers/app-header/app-header.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginFormComponent } from './components/contents/login-form/login-form.component';
import { RegistrationFormComponent } from './components/contents/registration-form/registration-form.component';
import {MatDividerModule} from '@angular/material/divider';
import { RegistrationPageComponent } from './pages/registration/registration-page/registration-page.component';
import { RegistrationPageDesktopComponent } from './pages/registration/registration-page-desktop/registration-page-desktop.component';
import { RegistrationPageTabletComponent } from './pages/registration/registration-page-tablet/registration-page-tablet.component';
import { RegistrationPageMobileComponent } from './pages/registration/registration-page-mobile/registration-page-mobile.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { HomePageDesktopComponent } from './pages/home/home-page-desktop/home-page-desktop.component';
import { HomePageMobileComponent } from './pages/home/home-page-mobile/home-page-mobile.component';
import { HomePageTabletComponent } from './pages/home/home-page-tablet/home-page-tablet.component';
import {RouterModule, Routes,  ActivatedRoute, ParamMap} from "@angular/router";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'registration', component: RegistrationPageComponent},

];



@NgModule({
  declarations: [
    AppComponent,
    LoginPageDesktopComponent,
    LoginPageTabletComponent,
    LoginPageMobileComponent,
    AppHeaderDesktopComponent,
    AppHeaderTabletComponent,
    AppHeaderMobileComponent,
    AppHeaderComponent,
    LoginPageComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    RegistrationPageComponent,
    RegistrationPageDesktopComponent,
    RegistrationPageTabletComponent,
    RegistrationPageMobileComponent,
    HomePageComponent,
    HomePageDesktopComponent,
    HomePageMobileComponent,
    HomePageTabletComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDividerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
