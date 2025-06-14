import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { materialImports } from '../../../../../shared/src/lib/imports/material.imports';
import { RegexUtil } from '../../../../../shared/src/lib/utils/regex.util';

@Component({
  selector: 'app-payment',
  imports: [...materialImports, ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  paymentForm!: FormGroup;

  constructor(private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      cardholderName: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.pattern(RegexUtil.CARD_NUMBER)]],
      expiryDate: ['', [Validators.required, Validators.pattern(RegexUtil.EXPIRY_DATE)]],
      cvv: ['', [Validators.required, Validators.pattern(RegexUtil.CVV)]],
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
