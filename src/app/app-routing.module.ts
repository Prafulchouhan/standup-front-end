import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './user/profile/profile.component';
import { StandupComponent } from './user/standup/standup.component';
import { AddStandupComponent } from './admin/add-standup/add-standup.component';
import { AddTaskComponent } from './user/add-task/add-task.component';
import { StandupDashboardComponent } from './components/standup-dashboard/standup-dashboard.component';
import { DailyUpdatesComponent } from './user/daily-updates/daily-updates.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    pathMatch: 'full'
  },
  {
    path: 'add-standup',
    component: AddStandupComponent,
    pathMatch: 'full'
  },
  {
    path: 'add-task',
    component: AddTaskComponent,
    pathMatch: 'full'
  },
  {
    path: 'standup-dashboard',
    component: StandupDashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'daily-update',
    component: DailyUpdatesComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
