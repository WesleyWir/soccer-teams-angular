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

  constructor(
    public teamsService: TeamService) {
    this.teams = this.teamsService.getAllTeams();
  }

  ngOnInit(): void {
  }

  deleteEvent(i: number) {
    this.teamsService.deleteTeam(i);
  }

  changeMatchNumbers(values: {i: number, symb: string, type: string}){
    if(values.symb == 'increase'){
      return this.teamsService.increase(values.i, values.type);
    }

    return this.teamsService.decrease(values.i, values.type);
  }
}
