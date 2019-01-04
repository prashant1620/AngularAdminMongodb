import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateResourcesComponent } from './template-resources/template-resources.component';
import { TemplatePreviewComponent } from './template-preview/template-preview.component';
import { TemplateInfoComponent } from './template-info/template-info.component';
import { TemplateDataComponent } from './template-data/template-data.component';
import { TemplateHtmlComponent } from './template-html/template-html.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { NbSelectModule, NbDatepickerModule, NbCalendarModule } from '@nebular/theme';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker'
import { TemplatesService } from './templates.service';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

@NgModule({
  imports: [
    CommonModule,
    NbSelectModule,AngularDateTimePickerModule,NbDatepickerModule.forRoot(),NgxErrorsModule, NbCalendarModule
  ],
  declarations: [TemplateResourcesComponent, TemplatePreviewComponent, TemplateInfoComponent, TemplateDataComponent, TemplateHtmlComponent, TemplateListComponent]
 , providers: [  TemplatesService]
})
export class TemplatesModule { }
