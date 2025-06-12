import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnaprideHomeComponent } from './snapride-home.component';

describe('SnaprideHomeComponent', () => {
  let component: SnaprideHomeComponent;
  let fixture: ComponentFixture<SnaprideHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnaprideHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnaprideHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
