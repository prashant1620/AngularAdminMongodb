import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateHtmlComponent } from './template-html.component';

describe('TemplateHtmlComponent', () => {
  let component: TemplateHtmlComponent;
  let fixture: ComponentFixture<TemplateHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
