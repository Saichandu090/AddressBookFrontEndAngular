import { CommonModule, NgFor } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddressServiceService } from '../services/address-service.service';
import { Address, ResponseAddress } from '../model/address';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.scss'
})
export class AddFormComponent {

  activeRoute = inject(ActivatedRoute);


  private addressService: AddressServiceService = inject(AddressServiceService);

  // address: Address = {
  //   fullName: '',
  //   phoneNumber: 0,
  //   address: '',
  //   city: '',
  //   state: '',
  //   zipCode: 0,
  // };

  addressForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required,Validators.minLength(6),Validators.maxLength(6)])
  })

  private router: Router = inject(Router);

  addForm() {
    const addressBook = this.addressForm.value;
    this.addressService.addBook(addressBook).subscribe((res: ResponseAddress) => {
      if (res.fullName != null) {
        alert('Book Added Successfully');
        console.log(res)
        this.router.navigateByUrl('/homepage')
      }
    })
  }

  onReset() {
    this.addressForm.reset();
  }
}
