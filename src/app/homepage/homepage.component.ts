import { Component, inject, OnInit, SkipSelf, ɵɵqueryRefresh } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AddressServiceService } from '../services/address-service.service';
import { Address, ResponseAddress } from '../model/address';
import { CommonModule } from '@angular/common';
import { LoginResponse } from '../model/UserDetails';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {

  addressService: AddressServiceService = inject(AddressServiceService);

  ngOnInit(): void {
    this.getBooks();
  }

  books: ResponseAddress[] = [];

  private router:Router=inject(Router);

  //-------------------------------------------------//

  getBooks() {
    this.addressService.getBooks().subscribe((obj: ResponseAddress[]) => {
      console.log(obj)
      this.books = obj;
    });
  }

  //-------------------------------------------------//

  onDelete(id: number) {
    const confDelete = confirm("Are you sure that you want to delete");
    
    if (confDelete) {
      this.addressService.deleteBook(id).subscribe((res:LoginResponse) => {
        alert(res.message)
        this.router.navigateByUrl('/homepage');
      });
    }
  };

  //-------------------------------------------------//

  onUpdate(id: number, addressBook: Address) {
    
  };

  //-------------------------------------------------//

}
