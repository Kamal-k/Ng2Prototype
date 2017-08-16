import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import { IndexComponent } from './index/index.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { Chartjs2Component } from './chartjs2/chartjs2.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { EchartsComponent } from './echarts/echarts.component';
import { FixedfooterComponent } from './fixedfooter/fixedfooter.component';
import { FixedsidebarComponent } from './fixedsidebar/fixedsidebar.component';
import { FormComponent } from './form/form.component';
import { FormadvancedComponent } from './formadvanced/formadvanced.component';
import { FormbuttonsComponent } from './formbuttons/formbuttons.component';
import { FormuploadComponent } from './formupload/formupload.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { FormwizardscalendarComponent } from './formwizardscalendar/formwizardscalendar.component';
import { GeneralelementsComponent } from './generalelements/generalelements.component';
import { GlyphiconsComponent } from './glyphicons/glyphicons.component';
import { IconsComponent } from './icons/icons.component';
import { InboxComponent } from './inbox/inbox.component';
import { Index2Component } from './index2/index2.component';
import { Index3Component } from './index3/index3.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { Level2Component } from './level2/level2.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { MediagalleryComponent } from './mediagallery/mediagallery.component';
import { MorisjsComponent } from './morisjs/morisjs.component';
import { OtherchartsComponent } from './othercharts/othercharts.component';
import { Page403Component } from './page403/page403.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { PlainpageComponent } from './plainpage/plainpage.component';
import { PricingtablesComponent } from './pricingtables/pricingtables.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { ProjectsComponent } from './projects/projects.component';
import { TablesComponent } from './tables/tables.component';
import { TablesdynamicComponent } from './tablesdynamic/tablesdynamic.component';
import { TypographyComponent } from './typography/typography.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { XxComponent } from './xx/xx.component';


import { CompanyComponent } from './company/company.component';
import { PeopleComponent } from './people/people.component';
import { ClientsComponent } from './clients/clients.component';
import { OurMethodComponent } from './our-method/our-method.component';
import { StrategicUxComponent } from './strategic-ux/strategic-ux.component';

const routes: Routes = [
      {
          path: '',
          redirectTo: '/index',
          pathMatch: 'full'
      },
      {
          path: 'dashboard',
          redirectTo: '/index',
          pathMatch: 'full'
      },
      {
          path: 'dashboard2',
          redirectTo: '/index2',
          pathMatch: 'full'
      },
      {
          path: 'dashboard3',
          redirectTo: '/index3',
          pathMatch: 'full'
      },
      {path:"", component:IndexComponent},
      {path:"index", component:IndexComponent},
      {path:"calendar", component:CalendarComponent},
      {path:"chartjs", component:ChartjsComponent},
      {path:"chartjs2", component:Chartjs2Component},
      {path:"contacts", component:ContactsComponent},
      {path:"ecommerce", component:EcommerceComponent},
      {path:"e_charts", component:EchartsComponent},
      {path:"fixed_footer", component:FixedfooterComponent},
      {path:"fixed_sidebar", component:FixedsidebarComponent},
      {path:"form", component:FormComponent},
      {path:"form_advanced", component:FormadvancedComponent},
      {path:"form_buttons", component:FormbuttonsComponent},
      {path:"form_upload", component:FormuploadComponent},
      {path:"form_validation", component:FormvalidationComponent},
      {path:"form_wizards", component:FormwizardscalendarComponent},
      {path:"general_elements", component:GeneralelementsComponent},
      {path:"glyphicons", component:GlyphiconsComponent},
      {path:"icons", component:IconsComponent},
      {path:"inbox", component:InboxComponent},
      {path:"index2", component:Index2Component},
      {path:"index3", component:Index3Component},
      {path:"invoice", component:InvoiceComponent},
      {path:"level2", component:Level2Component},
      {path:"login", component:LoginComponent},
      {path:"map", component:MapComponent},
      {path:"media_gallery", component:MediagalleryComponent},
      {path:"morisjs", component:MorisjsComponent},
      {path:"other_charts", component:OtherchartsComponent},
      {path:"page_403", component:Page403Component},
      {path:"page_404", component:Page404Component},
      {path:"page_500", component:Page500Component},
      {path:"plain_page", component:PlainpageComponent},
      {path:"pricing_tables", component:PricingtablesComponent},
      {path:"profile", component:ProfileComponent},
      {path:"project_detail", component:ProjectdetailComponent},
      {path:"projects", component:ProjectsComponent},
      {path:"tables", component:TablesComponent},
      {path:"tables_dynamic", component:TablesdynamicComponent},
      {path:"typography", component:TypographyComponent},
      {path:"widgets", component:WidgetsComponent},
      {path:"xx", component:XxComponent},
      {path:"company", component:CompanyComponent},
      {path:"people", component:PeopleComponent},
      {path:"clients", component:ClientsComponent},
      {path:"our_method", component:OurMethodComponent},
      {path:"strategic_ux", component:StrategicUxComponent},
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{}

export const routingComponents = [
    IndexComponent,
    CalendarComponent,
    ChartjsComponent,
    Chartjs2Component,
    ContactsComponent,
    EcommerceComponent,
    EchartsComponent,
    FixedfooterComponent,
    FixedsidebarComponent,
    FormComponent,
    FormadvancedComponent,
    FormbuttonsComponent,
    FormuploadComponent,
    FormvalidationComponent,
    FormwizardscalendarComponent,
    GeneralelementsComponent,
    GlyphiconsComponent,
    IconsComponent,
    InboxComponent,
    Index2Component,
    Index3Component,
    InvoiceComponent,
    Level2Component,
    LoginComponent,
    MapComponent,
    MediagalleryComponent,
    MorisjsComponent,
    OtherchartsComponent,
    Page403Component,
    Page404Component,
    Page500Component,
    PlainpageComponent,
    PricingtablesComponent,
    ProfileComponent,
    ProjectdetailComponent,
    ProjectsComponent,
    TablesComponent,
    TablesdynamicComponent,
    TypographyComponent,
    WidgetsComponent,
    XxComponent,
    CompanyComponent,
    PeopleComponent,
    ClientsComponent,
    OurMethodComponent,
    StrategicUxComponent
  ]