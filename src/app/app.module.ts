// import { platformBrowserDynamic }  from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing Modules
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { routingComponents } from './app.routes';

// Plugins
import { ProgressbarModule } from 'ngx-bootstrap';
// import { ChartModule } from 'angular2-highcharts';

// Components
import { AppComponent } from './app.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// Directives
import { Highcharts1Directive } from './highcharts1.directive';
import { DeviceUsagePieDirective } from './device-usage-pie.directive';
import { DateRangePickerDirective } from './date-range-picker.directive';
import { QuickSettingsGaugeDirective } from './quick-settings-gauge.directive';
import { WorldmapDirective } from './worldmap.directive';
import { WeatherDirective } from './weather.directive';
import { BargraphDirective } from './bargraph.directive';

declare var require:any

@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    Highcharts1Directive,
    DeviceUsagePieDirective,
    DateRangePickerDirective,
    QuickSettingsGaugeDirective,
    WorldmapDirective,
    WeatherDirective,
    BargraphDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ProgressbarModule.forRoot()
    // ChartModule.forRoot(require('highcharts/highmaps'))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);

