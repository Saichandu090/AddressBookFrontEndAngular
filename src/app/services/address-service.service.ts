import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Address, ResponseAddress } from '../model/address';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { LoginResponse } from '../model/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {

  private baseurl: string = "http://localhost:8080/addressBook/";

  http: HttpClient = inject(HttpClient);

  //headers: HttpHeaders = inject(HttpHeaders);

  getBooks(): Observable<ResponseAddress[]> {
    let token = localStorage.getItem('angularToken');
    //console.log(token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    //console.log(headers)
    return this.http.get<ResponseAddress[]>(this.baseurl + "allBooks", { headers });
  }

  // getBooks(): Observable<ResponseAddress[]> {
  //   return this.http.get<ResponseAddress[]>();
  // }

  addBook(addressBook: Address): Observable<ResponseAddress> {
    let token = localStorage.getItem('angularToken');
    console.log(token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.post<ResponseAddress>(this.baseurl + 'addBook', addressBook, { headers });
  }

  deleteBook(id: number): Observable<LoginResponse> {
    let token = localStorage.getItem('angularToken');
    console.log(token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.delete<LoginResponse>(this.baseurl + `deleteBook/${id}`, { headers });
  }

  updateBook(id: number, addressBook: Address): Observable<ResponseAddress> {
    let token = localStorage.getItem('angularToken');
    console.log(token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.put<ResponseAddress>(this.baseurl + `updateBook/${id}`, addressBook, { headers });
  }

}
