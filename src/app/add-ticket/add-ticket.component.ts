import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../models/ticket.model';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  ticket: Ticket = new Ticket();

  constructor(private router: Router, private ticketService: TicketService) { }

  ngOnInit(): void {
  }

  insert(): void {
    console.log(this.ticket);
    this.ticketService.insert(this.ticket)
      .subscribe(data => {
        alert("Ticket has been created successfully.");
      });
  };

}
