import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindersOverlayComponent } from './reminders-overlay.component';

describe('RemindersOverlayComponent', () => {
  let component: RemindersOverlayComponent;
  let fixture: ComponentFixture<RemindersOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindersOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindersOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
