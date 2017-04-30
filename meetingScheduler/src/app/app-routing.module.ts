import { NgModule } from '@angular/core';
import { Routes, Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeetingSchedulerComponent } from './meeting-scheduler/meeting-scheduler.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CanActivateViaAuthGuard } from '../services/auth-router-guard.service';

const fallBackRoute: Route = {
  path: "**",  component: PageNotFoundComponent
}

const indexRoute: Route = {
  path: "",   redirectTo: "/home", pathMatch: "full"
}

const routes: Routes = [
  { 
    path: "home", 
    component: HomeComponent 
  },
  {
    path: "user",
    canActivate: [CanActivateViaAuthGuard],
    children: [
      { 
        path: "dashboard", 
        component: DashboardComponent 
      },
      { 
        path: "meeting", 
        component: MeetingSchedulerComponent 
      },
      { 
        path: "", 
        component: PageNotFoundComponent 
      }
    ]
  },
  indexRoute,
  fallBackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
