import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { FORM_ERROR_MESSAGES } from '../constants/form-error-messages';
import { materialImports } from '../material.imports';

@Component({
  selector: 'app-form-error',
  imports: [...materialImports, CommonModule],
  templateUrl: './form-error.component.html',
  styleUrl: './form-error.component.scss'
})
export class FormErrorComponent {

  @Input() control!: AbstractControl | null;
  @Input() controlName!: string;

  get errorKeys(): string[] {
    return this.control && this.control.errors ? Object.keys(this.control.errors) : [];
  }

  /**
   * Returns the error message for the first error key found in the control.
   * If no error keys are found, it returns a default message.
   * * @returns {string} The error message for the first error key or a default message.
   * */
  getErrorMessage(errorKey: string): string {
    const errorFn = FORM_ERROR_MESSAGES[errorKey];
    if (errorFn) {
      return errorFn(this.formatFieldName(this.controlName), this.control?.errors?.[errorKey]);
    }
    return 'Invalid value';
  }

  private formatFieldName(name: string): string {
    // Capitalize and replace underscores with spaces
    return name.replace(/_/g, ' ').replace(/^\w/, c => c.toUpperCase());
  }
}
