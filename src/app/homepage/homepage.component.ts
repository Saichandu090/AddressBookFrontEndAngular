import { Component, inject, OnInit, SkipSelf, ɵɵqueryRefresh } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddressServiceService } from '../services/address-service.service';
import { Address, ResponseAddress } from '../model/address';
import { CommonModule } from '@angular/common';


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
      this.addressService.deleteBook(id).subscribe((res: String) => {
        if (res !== null) {
          alert(res);
          console.log(res);
        }
      });
      this.getBooks();
    }
  };

  //-------------------------------------------------//

  onUpdate(id: number, addressBook: Address) {
    
  };

  //-------------------------------------------------//

}
