import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { RowComponent } from './row/row.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    TableComponent,
    RowComponent,
  ],
  imports: [
    CommonModule,
    SweetAlert2Module.forRoot(),
    FontAwesomeModule,
    RouterModule,
  ],
})
export class TeamsTableModule { }
