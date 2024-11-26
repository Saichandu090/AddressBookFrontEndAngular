import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AddressServiceService } from '../address-service.service';
import { Address } from '../model/address';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.scss'
})
export class AddFormComponent {

  constructor(private addressService: AddressServiceService) { }

  successMessage: string = '';

  address: Address = {
    fullName: '',
    phoneNumber: 0,
    address: '',
    city: '',
    state: '',
    zipCode: 0,
  };

  addForm(addressForm: NgForm) {
    console.log(this.address);
    this.addressService.addBook(this.address).subscribe((data) =>
      this.successMessage = "Book Added SuccessFully!!")
    addressForm.reset();
  }

  reset(addressForm:NgForm) {
    addressForm.reset();
  }
}
