import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public team: any;
  public id: number|undefined = undefined;

  constructor(
    public router: Router,
    private route: ActivatedRoute, 
    public teamsService: TeamService) { 
    if(this.route.snapshot.paramMap.get('id')){
      this.id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.teamsService.getTeamById(this.id).subscribe(res => {
        this.team = res;
      });
    }else{
      this.team = new Team();
    }
  }

  ngOnInit(): void {
  }

  onSave(){
    if(this.id !== undefined){
      this.teamsService.updateTeam(this.id, this.team).subscribe();
    }else{
      this.teamsService.addTeam(this.team);
    }
    this.router.navigate(['/teams']);
  }

}
