import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentActionListComponent } from './patent-action-list.component';

describe('PatentActionListComponent', () => {
  let component: PatentActionListComponent;
  let fixture: ComponentFixture<PatentActionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatentActionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentActionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
