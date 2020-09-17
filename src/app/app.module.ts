import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportpollingComponent } from './reportpolling/reportpolling.component';
import { PollingService } from './shared/polling.service';
import { ReportCityService } from './shared/report-city.service';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { FormsModule } from '@angular/forms';
import { CitiesComponent } from './cities/cities.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportpollingComponent,
    CitiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [
    PollingService,
    ReportCityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
