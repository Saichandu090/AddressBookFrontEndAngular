import { Component, inject, OnInit } from '@angular/core';
import { Address, ResponseAddress } from '../model/address';
import { AddressServiceService } from '../services/address-service.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginResponse } from '../model/UserDetails';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.scss'
})
export class EditFormComponent implements OnInit {

  private addressService = inject(AddressServiceService);

  private route = inject(ActivatedRoute);

  private fb:FormBuilder=inject(FormBuilder);

  books: ResponseAddress[] = [];

  addressForm: FormGroup= this.fb.group({
    fullName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
  })

  getEditBook() {
      this.addressService.getBook(this.id).subscribe((res:ResponseAddress)=>{
      this.editableBook=res;
      console.log(this.editableBook);

      this.addressForm.patchValue({
        fullName: this.editableBook.fullName,
        phoneNumber: this.editableBook.phoneNumber,
        address: this.editableBook.address,
        city: this.editableBook.city,
        state: this.editableBook.state,
        zipCode: this.editableBook.zipCode
      });
     })
  }


  editableBook!: ResponseAddress;

  id!:number;
  name!:string;
  phoneNumber!:number;
  address!:string;
  city!:string;
  state!:string;
  zipCode!:number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getEditBook();
  }

  onReset() {
    this.addressForm.reset();
  }

  router=inject(Router);

  onUpdate(){
    const adb=this.addressForm.value;
    this.addressService.updateBook(this.id,adb).subscribe((res:LoginResponse)=>{
      if(res.result){
        alert(res.message);
        this.router.navigateByUrl('/homepage');
      }else{
        alert(res.message);
      }
    })
  }
}
