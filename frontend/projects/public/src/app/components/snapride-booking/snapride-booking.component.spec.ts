import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnaprideBookingComponent } from './snapride-booking.component';

describe('SnaprideBookingComponent', () => {
  let component: SnaprideBookingComponent;
  let fixture: ComponentFixture<SnaprideBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnaprideBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnaprideBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
