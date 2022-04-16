import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  teams: Team[] = [];

  constructor(public teamsService: TeamService) {
    this.teams = this.teamsService.getAllTeams();
  }

  ngOnInit(): void {
  }
}
