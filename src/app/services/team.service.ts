import { Injectable } from '@angular/core';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teams: Team[] = [];

  constructor() { }

  addTeam(team: Team) {
    this.countPoints(team);
    this.teams.push(team);
    this.orderTeams();
  }

  updateTeam(id: number, editedTeam: Team) {
    this.teams.map((team: Team, index) => {
      if (index == id) {
        this.countPoints(editedTeam);
        return { ...team, editedTeam };
      }
    })
    this.orderTeams()
  }

  deleteTeam(id: number) {
    return this.teams.splice(id, 1);
  }

  increase(id: number, type: string){
    this.teams.map((team: Team, index) => {
      if (index == id) {
        team[type]++;
        return this.countPoints(team);
      }
    })
    this.orderTeams()
  }

  decrease(id: number, type: string){
    this.teams.map((team: Team, index) => {
      if (index == id) {
        team[type]--;
        return this.countPoints(team);
      }
    })
    this.orderTeams()
  }

  getAllTeams(): Team[] {
    return this.teams;
  }

  getTeamById(id: any) {
    return this.teams[id];
  }

  private orderTeams() {
    this.teams.sort((a, b) => {
      return b.points - a.points;
    });
  }

  private countPoints(team: Team) {
    team.points = (team.wins * 3) + (team.draws * 1);
  }

}
