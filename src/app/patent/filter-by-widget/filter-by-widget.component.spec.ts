import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByWidgetComponent } from './filter-by-widget.component';

describe('FilterByWidgetComponent', () => {
  let component: FilterByWidgetComponent;
  let fixture: ComponentFixture<FilterByWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterByWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
