import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddressServiceService } from '../services/address-service.service';
import { Observable } from 'rxjs';
import { Address, ResponseAddress } from '../model/address';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FormsModule, RouterModule,CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{

  addressService:AddressServiceService=inject(AddressServiceService);

  ngOnInit(): void {
    this.getBooks();
  }

  books:ResponseAddress[]=[];

  getBooks(){
    this.addressService.getBooks().subscribe((obj:ResponseAddress[])=>{
      console.log(obj)
      this.books=obj;
    }); 
  }
  
}
