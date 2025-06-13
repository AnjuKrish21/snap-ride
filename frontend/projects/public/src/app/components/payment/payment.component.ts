import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { materialImports } from '../../../../../shared/src/lib/imports/material.imports';

@Component({
  selector: 'app-payment',
  imports: [...materialImports, ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  paymentForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      cardholderName: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiryDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
      amount: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.paymentForm.valid) {
      console.log('Payment submitted:', this.paymentForm.value);
      // Call your payment API here
    } else {
      this.paymentForm.markAllAsTouched();
    }
  }

}
