import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  addressForm: FormGroup;
  orderPlaced: boolean = false; // Flag to control the visibility of the alert message


  constructor(private fb: FormBuilder) {
    // Initialize the form and add validators
    this.addressForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [Validators.required]], 
      number: ['',[Validators.required]]
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (this.addressForm.valid) {
      // Form is valid, proceed with payment or other actions
      console.log('Form submitted:', this.addressForm.value);
      this.orderPlaced=true
    } else {
      // Form is invalid, display errors
      console.log('Form is invalid');
    }
  }
}
