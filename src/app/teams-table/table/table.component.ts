import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  teams: any;

  constructor(
    public teamsService: TeamService) {
    this.teamsService.getAllTeams().subscribe(res => {
      this.teams = res.content;
    });
  }

  ngOnInit(): void {
  }

  deleteEvent(i: number) {
    this.teamsService.deleteTeam(i).subscribe(res => {
      return this.teamsService.getAllTeams().subscribe(res => {
        this.teams = res.content;
      });
    });

  }

  changeMatchNumbers(values: { i: number, symb: string, type: string }) {
    if (values.symb == 'increase') {
      this.teamsService.increase(values.i, values.type);
    } else {
      this.teamsService.decrease(values.i, values.type);
    }

    return this.teamsService.getAllTeams().subscribe(res => {
      this.teams = res.content;
    });
  }
}
