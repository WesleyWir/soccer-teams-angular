import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { RowComponent } from './row/row.component';



@NgModule({
  declarations: [
    TableComponent,
    RowComponent
  ],
  imports: [
    CommonModule
  ],
})
export class TeamsTableModule { }
