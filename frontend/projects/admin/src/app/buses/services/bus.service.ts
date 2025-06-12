import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { config } from '../../config/config';
import { Bus, BusType, Location } from '../model/bus.model';

@Injectable({
  providedIn: 'root'
})
export class BusService {  

  private baseUrl = config.busBaseApiUrl;
  constructor(private readonly http: HttpClient) { }

  getAllBuses(): Observable<Bus[]> {
    return this.http.get<Bus[]>(`${this.baseUrl}/buses`);
  }

  updateUser(bus: Bus): Observable<Bus> {
    return this.http.put<Bus>(`${this.baseUrl}/buses/${bus.id}`, bus);
  }

  addUser(bus: Bus): Observable<Bus> {
    return this.http.post<Bus>(`${this.baseUrl}/buses`, bus);
  }

  getBusTypes(): Observable<BusType[]> {
    return this.http.get<BusType[]>(`${this.baseUrl}/bus-types`);
  }

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.baseUrl}/locations`);
  }

  saveBus(bus: Bus): Observable<Bus> {
    if (bus.id) {
      return this.updateBus(bus);
    } else {
      return this.addBus(bus);
    }
  }

  private addBus(bus: Bus): Observable<Bus> {
    return this.http.post<Bus>(`${this.baseUrl}/buses`, bus);
  }
  private updateBus(bus: Bus): Observable<Bus> {
    return this.http.put<Bus>(`${this.baseUrl}/buses/${bus.id}`, bus);
  }

  getBusById(id: number): Observable<Bus> {
    return this.http.get<Bus>(`${this.baseUrl}/buses/${id}`);
  }
}
