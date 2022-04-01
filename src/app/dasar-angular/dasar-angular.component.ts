import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dasar-angular',
  templateUrl: './dasar-angular.component.html',
  styleUrls: ['./dasar-angular.component.scss'],
  // inline css
  // styles: [
  //   `
  //     .teks {
  //       color: red;
  //     }
  //   `,
  // ],
  // template: `<h2 class=".teks">Ini inline HTML</h2>`,
})
export class DasarAngularComponent implements OnInit {
  title = 'Dasar Angular Js';
  judul = 'Training Inixindo Bandung';
  nama = 'Ihsan';
  disabled = true;
  tanya = 'yes';
  // warna
  color = 'green';
  // menmapung data dari form
  dataKosong = '';
  // ini array untuk looping
  users = ['ihsan', 'rine', 'dine'];
  userDetails = [
    {
      nama: 'ihsan',
      email: 'ihsan@gmail.com',
      accounts: ['facebook', 'twitter', 'instagram'],
    },
    {
      nama: 'Rine',
      email: 'Rine@gmail.com',
      accounts: ['facebook', 'twitter', 'instagram'],
    },
    {
      nama: 'Dine',
      email: 'Dine@gmail.com',
      accounts: ['facebook', 'twitter', 'instagram'],
    },
  ];

  getName = () => {
    alert(this.judul);
  };

  getJudul(nama: string | number) {
    alert(nama);
  }

  getTraining(a: string | number) {
    alert(a);
  }

  // keyup(event: any)
  getData(keyup: string) {
    console.log(keyup);
  }

  getValue(e: any) {
    console.warn(e);
    this.dataKosong = e;
  }

  constructor() {}

  ngOnInit(): void {}
}
