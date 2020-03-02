import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlpdftemplateComponent } from './htmlpdftemplate.component';

describe('HtmlpdftemplateComponent', () => {
  let component: HtmlpdftemplateComponent;
  let fixture: ComponentFixture<HtmlpdftemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlpdftemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlpdftemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
