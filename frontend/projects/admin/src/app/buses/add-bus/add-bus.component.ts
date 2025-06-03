import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormErrorComponent } from '../../shared/components/form-error/form-error.component';
import { GoBackComponent } from '../../shared/components/go-back/go-back.component';
import { materialImports } from '../../shared/imports/material.imports';

@Component({
  selector: 'app-add-bus',
  imports: [CommonModule, ReactiveFormsModule, ...materialImports, GoBackComponent, FormErrorComponent],
  templateUrl: './add-bus.component.html',
  styleUrl: './add-bus.component.scss'
})
export class AddBusComponent implements OnInit {
  busForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.busForm = this.formBuilder.group({
      name: ['', Validators.required],
      route: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.busForm.valid) {
      // Handle bus creation logic here
      console.log(this.busForm.value);
    }
  }
}
