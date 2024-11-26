import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddressServiceService } from '../address-service.service';
import { Observable } from 'rxjs';
import { Address } from '../model/address';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FormsModule, RouterModule,CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  constructor(private addressService: AddressServiceService) { }

  getBooks():Observable<Address[]>{
    console.log(this.addressService.getBooks());
    return this.addressService.getBooks();
  }
}
