import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { TemplatesComponent } from './templates/templates.component';
import { NbSelectModule, NbStepperModule, NbDatepickerModule, NbCalendarModule, NbDialogService, NbDialogModule } from '@nebular/theme';
import { TemplateResourcesComponent } from './templates/template-resources/template-resources.component';
import { TemplateDataComponent } from './templates/template-data/template-data.component';
import { TemplateHtmlComponent } from './templates/template-html/template-html.component';
import { TemplateListComponent } from './templates/template-list/template-list.component';
import { TemplatePreviewComponent } from './templates/template-preview/template-preview.component';
import { TemplateInfoComponent } from './templates/template-info/template-info.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker'
import { TemplatesService } from './templates/templates.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS} from 'ng-pick-datetime';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  HttpModule } from '@angular/http';


const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,NbDialogModule.forRoot(),HttpModule,
    DashboardModule,OwlDateTimeModule,OwlNativeDateTimeModule,
    ECommerceModule,CKEditorModule,AngularDateTimePickerModule,
    MiscellaneousModule,NbSelectModule,NbStepperModule,NbDatepickerModule.forRoot(), NbCalendarModule,FontAwesomeModule
  ],
  entryComponents: [
    TemplateInfoComponent,TemplatePreviewComponent,TemplateHtmlComponent
  ],  
  declarations: [
    ...PAGES_COMPONENTS,
    TemplatesComponent,TemplateResourcesComponent,TemplateDataComponent,
    TemplateHtmlComponent,TemplateListComponent,TemplatePreviewComponent,TemplateInfoComponent
  ], providers: [  TemplatesService,NbDialogService]
})
export class PagesModule {
}
