import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FilterComponent } from './filter/filter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LaunchListComponent } from './launch-list/launch-list.component';


@NgModule({
  declarations: [AppComponent, FilterComponent, DashboardComponent, LaunchListComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }),
  AppRoutingModule,
  HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
