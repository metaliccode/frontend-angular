import { Injectable } from '@angular/core';
// http client
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  // untuk membuat variabel base url mengunakan http
  constructor(private http: HttpClient) {}

  // option
  httpOptions: any;
  URL = 'https://reqres.in/api/users?page=2';

  // fungsi untuk mengambil data dari API
  getData() {
    return this.http.get(this.URL, this.httpOptions);
  }
}
