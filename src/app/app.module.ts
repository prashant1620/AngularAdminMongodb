/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/system/login/login.component';
import { NbSelectModule, NbStepperModule, NbDatepickerModule, NbCalendarModule, NbDialogService, NbDialogModule } from '@nebular/theme';
import { CKEditorModule } from 'ng2-ckeditor';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker'
import { TemplatesService } from './pages/templates/templates.service';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS} from 'ng-pick-datetime';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { config } from 'rxjs';
import { TemplateInfoComponent } from './pages/templates/template-info/template-info.component';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [AppComponent,LoginComponent],
 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule, NbCalendarModule,NbDialogModule.forRoot(),HttpModule,

    NgbModule.forRoot(),OwlDateTimeModule, OwlNativeDateTimeModule,NgxErrorsModule,
    
    ThemeModule.forRoot(),CKEditorModule,AngularDateTimePickerModule,
    CoreModule.forRoot(),NbSelectModule,NbStepperModule,NbDatepickerModule.forRoot(),FontAwesomeModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },TemplatesService ,NbDialogService],
})
export class AppModule {
}
