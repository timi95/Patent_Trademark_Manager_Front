import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrademarksComponent } from './view-trademarks.component';

describe('ViewTrademarksComponent', () => {
  let component: ViewTrademarksComponent;
  let fixture: ComponentFixture<ViewTrademarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTrademarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTrademarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
