import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/service/member.service';
import { MemberModel } from 'src/app/member/member-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss'],
})
export class EditMemberComponent implements OnInit {
  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  judul = 'Edit Member';
  id: any;
  formData = new MemberModel();
  dataView: any = {};

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getViewId();
  }

  // get View
  getViewId() {
    this.memberService.getDataById(this.id).subscribe((res) => {
      this.dataView = res;
      // ini dari json server
      // this.formData = this.dataView;
      this.formData = this.dataView.data;
    });
  }

  updateData() {
    // console.log(this.formData);
    this.memberService.update(this.id, this.formData).subscribe((res) => {
      this.router.navigate(['/list-member']);
      console.log(res);
    });
  }
}
