import { catchError, throwError } from 'rxjs';

import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { NotificationService } from '../../services/notification.service';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {

  const notificationService = inject(NotificationService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        notificationService.show('Unauthorized access. Please log in.');
      } else if (error.status === 500) {
        notificationService.show('Server error. Please try again later.');
      } else {
        notificationService.show('An error occurred.');
      }
      return throwError(() => error);
    })
  );

};
