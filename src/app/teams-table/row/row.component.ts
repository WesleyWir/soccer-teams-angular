import { Component, Input, OnInit } from '@angular/core';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-table-row, [app-table-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input() team: Team;
  @Input() index: number;

  public faPen = faPen;
  public faTrashCan = faTrashCan;

  constructor() {
  }

  ngOnInit(): void {
  }

}
