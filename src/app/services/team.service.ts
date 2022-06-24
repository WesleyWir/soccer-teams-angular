import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teams: Team[] = [];
  private URL = environment.apiUrl + 'teams/';

  constructor(private http : HttpClient) { }

  addTeam(team: Team) {
    this.countPoints(team);
    this.http.post<Team>(this.URL, team).subscribe();
    this.orderTeams();
  }

  updateTeam(id: number, editedTeam: Team) {
    return this.http.put<Team>(this.URL+id, editedTeam);
  }

  deleteTeam(id: number) {
    return this.http.delete(this.URL + id);
  }

  increase(id: number, type: string){
    this.getTeamById(id).subscribe(res => {
      const team = res;
      team[type]++;
      this.updateTeam(team.id, team).subscribe()
    });    
    this.orderTeams()
  }

  decrease(id: number, type: string){
    this.getTeamById(id).subscribe(res => {
      const team = res;
      team[type]--;
      this.updateTeam(team.id, team).subscribe()
    });    
    this.orderTeams()
  }

  getAllTeams(){
    return this.http.get<any>(this.URL);
  }

  getTeamById(id: any) {
    return this.http.get<any>(this.URL+id);
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
