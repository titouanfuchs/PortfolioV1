import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameIntroComponent } from './frame-intro.component';

describe('FrameIntroComponent', () => {
  let component: FrameIntroComponent;
  let fixture: ComponentFixture<FrameIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
