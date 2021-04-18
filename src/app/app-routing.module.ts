import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { CompanyComponent } from './company/company.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  { path: 'ticket', component: TicketComponent},
  { path: 'company', component: CompanyComponent},
  { path: 'company/add', component: AddCompanyComponent},
  { path: 'ticket/add', component: AddTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
