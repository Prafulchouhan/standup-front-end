import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AddTaskComponent } from './user/add-task/add-task.component';
import { AddStandupComponent } from './admin/add-standup/add-standup.component';
import { StandupComponent } from './user/standup/standup.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'; // Add this line
import { MatButtonModule } from '@angular/material/button';
import { StandupDashboardComponent } from './components/standup-dashboard/standup-dashboard.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DailyUpdatesComponent } from './user/daily-updates/daily-updates.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavbarComponent,
    LoginComponent,
    ProfileComponent,
    AddTaskComponent,
    AddStandupComponent,
    StandupComponent,
    StandupDashboardComponent,
    DailyUpdatesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
