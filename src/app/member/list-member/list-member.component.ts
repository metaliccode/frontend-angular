import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/service/member.service';
import { MemberModel } from '../member-model';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.scss'],
})
export class ListMemberComponent implements OnInit {
  // ini var untuk interpolasi di html
  members: any = [];
  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.getDataMember();
  }

  getDataMember() {
    return this.memberService.getDataMember().subscribe((res) => {
      this.members = res;
      console.log(this.members);
    });
  }

  // Delete Btn Function
  deleteData(id: MemberModel) {
    this.memberService.delete(id).subscribe((res) => {
      alert('Data berhasil dihapus');
      this.getDataMember();
    });
  }
}
