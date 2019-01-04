import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateResourcesComponent } from './template-resources.component';

describe('TemplateResourcesComponent', () => {
  let component: TemplateResourcesComponent;
  let fixture: ComponentFixture<TemplateResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
