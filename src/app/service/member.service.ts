import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberModel } from '../member/member-model';

// import interface untuk form\

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(private http: HttpClient) {}

  httpOptions: any = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // URL = 'http://localhost:3000/members';
  BASE_URL = '';
  URL = 'http://127.0.0.1:8000/api/members';

  // get data dari local server menggunakan json-server
  getDataMember() {
    return this.http.get(this.URL, this.httpOptions);
  }

  // post data
  insertData(member: MemberModel) {
    return this.http.post(this.URL, member, this.httpOptions);
  }

  // get data by id
  getDataById(id: MemberModel) {
    return this.http.get(this.URL + '/' + id, this.httpOptions);
  }

  // update data
  update(id: MemberModel, member: MemberModel) {
    return this.http.put(`${this.URL}/${id}`, member, this.httpOptions);
    // return this.http.put(this.URL + '/' + id, member, this.httpOptions);
  }

  // delete data
  delete(id: MemberModel) {
    return this.http.delete(`${this.URL}/${id}`, this.httpOptions);
    // return this.http.put(this.URL + '/' + id, this.httpOptions);
  }
}
