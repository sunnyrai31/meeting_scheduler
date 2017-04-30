import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavsComponent } from './navs/navs.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from '../services/auth.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CanActivateViaAuthGuard } from '../services/auth-router-guard.service';
import { MeetingSchedulerComponent } from './meeting-scheduler/meeting-scheduler.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NavsComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    MeetingSchedulerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService, CanActivateViaAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
