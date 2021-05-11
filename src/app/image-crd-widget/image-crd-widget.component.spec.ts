import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCRDWidgetComponent } from './image-crd-widget.component';

describe('ImageCRDWidgetComponent', () => {
  let component: ImageCRDWidgetComponent;
  let fixture: ComponentFixture<ImageCRDWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCRDWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCRDWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
