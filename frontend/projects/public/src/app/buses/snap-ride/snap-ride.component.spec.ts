import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapRideComponent } from './snap-ride.component';

describe('SnapRideComponent', () => {
  let component: SnapRideComponent;
  let fixture: ComponentFixture<SnapRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnapRideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
