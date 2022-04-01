import { Injectable } from '@angular/core';
import axios from 'axios';
import { Api } from './api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  URL = 'https://reqres.in/api/users?page=2';

  getData() {
    return axios
      .get(this.URL)
      .then((res) => {
        console.log(res.data.data);
        return res.data.data;
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  // untuk post api
  postData(data: Api) {
    let body = JSON.stringify(data);
    let headers = {
      'Content-Type': 'application/json',
    };
    return axios
      .post(this.URL, body, { headers })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.warn(err);
      });
  }
}
