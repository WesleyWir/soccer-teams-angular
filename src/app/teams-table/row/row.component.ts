import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-row, [app-table-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  @Input() public team: object;
  constructor() { }

  ngOnInit(): void {
  }

}
