import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarkInstructionRegistrationComponent } from './trademark-instruction-registration.component';

describe('TrademarkInstructionRegistrationComponent', () => {
  let component: TrademarkInstructionRegistrationComponent;
  let fixture: ComponentFixture<TrademarkInstructionRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrademarkInstructionRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarkInstructionRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
