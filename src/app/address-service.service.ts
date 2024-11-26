import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from './model/address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {

  private baseurl: string = 'http://localhost:8080/addressBook';

  constructor(private http: HttpClient) { }

  addressBook: Address[] = [];

  getBooks(): Observable<Address[]> {
    return this.http.get<Address[]>(this.baseurl+'/allBooks');
  }

  addBook(addressBook: Address) {
    return this.http.post(this.baseurl+'/addBook', addressBook);
  }

}
