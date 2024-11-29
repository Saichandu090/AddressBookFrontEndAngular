import { CommonModule, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AddressServiceService } from '../services/address-service.service';
import { Address } from '../model/address';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.scss'
})
export class AddFormComponent {


  private addressService: AddressServiceService=inject(AddressServiceService);

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

  onReset(){
    this.address=this.address;
  }
}
