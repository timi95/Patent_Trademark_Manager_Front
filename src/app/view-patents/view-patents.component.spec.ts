import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatentsComponent } from './view-patents.component';

describe('ViewPatentsComponent', () => {
  let component: ViewPatentsComponent;
  let fixture: ComponentFixture<ViewPatentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPatentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPatentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
