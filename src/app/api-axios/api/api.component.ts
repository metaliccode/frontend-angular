import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Api } from '../api';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
})
export class ApiComponent implements OnInit {
  items: any = [];
  // var untuk menampung data
  dataPost: any = {
    first_name: '',
    last_name: '',
    email: '',
  };
  constructor(private axiosService: ApiService) {}

  ngOnInit(): void {
    this.show();
  }

  show() {
    this.axiosService.getData().then((res) => {
      console.log(res);
      this.items = res;
    });
  }

  // addUser
  addUser() {
    this.axiosService.postData(this.dataPost);
  }
}
