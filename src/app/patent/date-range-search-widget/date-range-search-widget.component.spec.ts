import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangeSearchWidgetComponent } from './date-range-search-widget.component';

describe('DateRangeSearchWidgetComponent', () => {
  let component: DateRangeSearchWidgetComponent;
  let fixture: ComponentFixture<DateRangeSearchWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateRangeSearchWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRangeSearchWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
