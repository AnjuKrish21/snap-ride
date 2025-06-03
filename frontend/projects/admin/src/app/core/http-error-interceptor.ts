import { catchError } from 'rxjs';

import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const HttpErrorInterceptor: HttpInterceptorFn = (req, next) => {
    const snackBar = inject(MatSnackBar);
    return next(req).pipe(
        catchError((error) => {
            snackBar.open('An error occurred', 'Close', {
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top',
                panelClass: ['snackbar-error']
            });
            throw error;
        })
    );
};