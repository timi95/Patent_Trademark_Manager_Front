import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPatentActionOverlayComponent } from './edit-patent-action-overlay.component';

describe('EditPatentActionOverlayComponent', () => {
  let component: EditPatentActionOverlayComponent;
  let fixture: ComponentFixture<EditPatentActionOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPatentActionOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPatentActionOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
