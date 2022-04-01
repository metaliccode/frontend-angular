import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/service/member.service';
import { memberModel } from 'src/app/member/list-member/interface/memberModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  // object
  // formData = new memberModel();
  formData: any = {};

  constructor(private memberService: MemberService, private router: Router) {}

  ngOnInit(): void {}

  add() {
    // console.warn(this.formData);

    this.memberService.insertData(this.formData).subscribe((res) => {
      alert('Data berhasil ditambahkan');
      this.router.navigate(['/list-member']);
      console.log(res);
    });
  }
}
