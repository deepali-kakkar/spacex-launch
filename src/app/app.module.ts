import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FilterComponent } from './dashboard/filter/filter.component';
import { HomeComponent } from './dashboard/home/home.component';
import { LaunchListComponent } from './dashboard/launch-list/launch-list.component';


@NgModule({
  declarations: [AppComponent, FilterComponent, HomeComponent, LaunchListComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }),
  AppRoutingModule,
  HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
