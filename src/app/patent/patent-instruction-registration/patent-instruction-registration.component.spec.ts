import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentInstructionRegistrationComponent } from './patent-instruction-registration.component';

describe('PatentInstructionRegistrationComponent', () => {
  let component: PatentInstructionRegistrationComponent;
  let fixture: ComponentFixture<PatentInstructionRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatentInstructionRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentInstructionRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
