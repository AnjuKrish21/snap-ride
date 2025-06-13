import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { config } from '../config/config';
import { BookingRequestDTO, BookingResponseDTO } from '../models/BookingDTO';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly baseUrl = config.busBaseApiUrl;
  constructor(private readonly http: HttpClient) { }

  addBooking(booking: BookingRequestDTO): Observable<BookingResponseDTO> {
    return this.http.post<BookingResponseDTO>(`${this.baseUrl}/bookings`, booking);
  }
}
