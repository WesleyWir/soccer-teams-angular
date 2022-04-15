import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team/team/team.component';
import { TableComponent } from './teams-table/table/table.component';

const routes: Routes = [
  {  path: 'team', component: TeamComponent},
  {  path: 'team/:id', component: TeamComponent},
  {  path: 'teams', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
