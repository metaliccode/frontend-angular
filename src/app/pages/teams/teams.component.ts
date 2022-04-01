import { Component, OnInit } from '@angular/core';
import { TeamsService } from './apiGlobal/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  teams: any = {}; // fungsi untuk menambahkan data ke API;

  constructor(private teamService: TeamsService) {}

  ngOnInit(): void {
    this.getDataTeams();
  }

  // fungsi untuk get data dari API
  getDataTeams() {
    this.teamService.getData().subscribe((res) => {
      this.teams = res;
      console.log(this.teams.data);
    });
  }
}
