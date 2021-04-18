import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { CompanyComponent } from './company/company.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    CompanyComponent,
    AddCompanyComponent,
    AddTicketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
