import { of } from 'rxjs';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusComponent } from './add-bus.component';

describe('AddBusComponent', () => {
  let component: AddBusComponent;
  let fixture: ComponentFixture<AddBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AddBusComponent],
      providers: [
        provideHttpClientTesting(),
        provideHttpClient()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call getBusTypes, getLocations, initBusForm, getFilteredFromLocations, and getFilteredToLocations', () => {
      // Given
      spyOn<any>(component, 'getBusTypes');
      spyOn<any>(component, 'getLocations');
      spyOn<any>(component, 'initBusForm');
      spyOn<any>(component, 'getFilteredFromLocations');
      spyOn<any>(component, 'getFilteredToLocations');

      // When
      component.ngOnInit();

      // Then
      expect(component['getBusTypes']).toHaveBeenCalled();
      expect(component['getLocations']).toHaveBeenCalled();
      expect(component['initBusForm']).toHaveBeenCalled();
      expect(component['getFilteredFromLocations']).toHaveBeenCalled();
      expect(component['getFilteredToLocations']).toHaveBeenCalled();
    });
  });

  describe('getFilteredFromLocations', () => {
    it('should set filteredFromLocations based on valueChanges of fromLocation', () => {
      // Given
      const mockValueChanges = of({ id: 1, name: 'Test Location' });
      spyOn(component.busForm.get(component.BUS_INPUTS.FROM_LOCATION)!, 'valueChanges' as never).and.returnValue(mockValueChanges as never);
      spyOn<any>(component, '_filter').and.callFake((value: string) => [value]);

      // When
      component['getFilteredFromLocations']();

      // Then
      component.filteredFromLocations.subscribe(locations => {
        expect(locations).toEqual([{ id: 1, name: 'Test Location' }]);
      });
    });

  });
});
