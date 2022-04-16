import { Component, Input, OnInit } from '@angular/core';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table-row, [app-table-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  public faPen = faPen;
  public faTrashCan = faTrashCan;
  @Input() public team: object;
  constructor() {
  }

  ngOnInit(): void {
  }

}
