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
  @Output() changeMatchValues = new EventEmitter<{ i: number, symb: string, type: string }>();

  public faPen = faPen;
  public faTrashCan = faTrashCan;

  public classesToRow: object;

  constructor() {
  }

  ngOnInit(): void {
    this.setupRowClasses()
  }

  ngOnChanges(): void{
    this.setupRowClasses()
  }

  deleteButtonPress() {
    this.deleteEvent.emit(this.index);
  }

  changeMatchValuesEmit(symb: string, type: string) {
    this.changeMatchValues.emit({ i: this.index, symb, type });
  }

  private setupRowClasses(){
    this.classesToRow = this.getRowClasses();
  }

  private getRowClasses() {
    // TODO: add this dinamically to user set.
    if (this.index <= 3) {
      return { 'first-positions': true }
    } else if (this.index === 4) {
      return { 'middle-position': true }
    } else if (this.index >= 7) {
      return { 'last-positions': true }
    }
  }

}
