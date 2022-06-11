import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcversionComponent } from './pcversion.component';

describe('PcversionComponent', () => {
  let component: PcversionComponent;
  let fixture: ComponentFixture<PcversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcversionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
