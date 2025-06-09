import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusesListComponent } from './buses-list.component';

describe('BusesListComponent', () => {
  let component: BusesListComponent;
  let fixture: ComponentFixture<BusesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusesListComponent
      ],
      providers: [
        provideHttpClientTesting(),
        provideHttpClient()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BusesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
