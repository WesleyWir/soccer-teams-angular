import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() deleteEvent = new EventEmitter();

  public faPen = faPen;
  public faTrashCan = faTrashCan;

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteButtonPress(){
    this.deleteEvent.emit(this.index);
  }

}
