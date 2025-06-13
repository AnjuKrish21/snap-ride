import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Location } from '../../../../../admin/src/app/buses/model/bus.model';
import { materialImports } from '../../imports/material.imports';

type Options = Location | string;

@Component({
  selector: 'lib-mat-select',
  standalone: true,
  templateUrl: './mat-select.component.html',
  styleUrls: ['./mat-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MatSelectComponent),
      multi: true,
    },
  ],
  imports: [...materialImports, CommonModule]
})
export class MatSelectComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() options: Options[] = [];
  @Input() bindLabel: string = 'name'; // Default property to bind for label
  value = signal<Options>({} as Options);

  onChange = (value: any) => { };
  onTouched = () => { };

  writeValue(value: any): void {
    this.value.set(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onSelect(value: Options) {
    this.value.set(value);
    this.onChange(value);
    this.onTouched();
  }

  optionsLabel(value: any): string {
    if (typeof value === 'string') {
      return value;
    }
    return value[this.bindLabel] || ''; // Use the bindLabel property to get the label
  }
}
