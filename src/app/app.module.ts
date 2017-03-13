import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  InputTextareaModule,
  DropdownModule,
  DialogModule,
  CalendarModule,
} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardSummaryComponent } from './dashboard/dashboard-summary.component';
import { DashboardListComponent } from './dashboard/dashboard-list.component';
import { MessageSummaryComponent } from './message/message-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardSummaryComponent,
    DashboardListComponent,
    MessageSummaryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    DialogModule,
    CalendarModule,
    DropdownModule,
    InputTextareaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
