import { CommonModule, NgFor } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddressServiceService } from '../services/address-service.service';
import { Address, ResponseAddress } from '../model/address';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.scss'
})
export class AddFormComponent {


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
    phoneNumber: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required])
  })

  private router :Router=inject(Router);

  addForm() {
    const addressBook=this.addressForm.value;
    this.addressService.addBook(addressBook).subscribe((res:ResponseAddress)=>{
      if(res.fullName!=null){
        alert('Book Added Successfully');
        console.log(res)
        this.router.navigateByUrl('/homepage')
      }
    })
  }

 onReset() {

  }
}
