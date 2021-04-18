import { Injectable } from "@angular/core";
import { Ticket } from "../models/ticket.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class TicketService {
  
    constructor(private http: HttpClient) { }
  
    private ticketUrl = 'http://localhost:8080';
  
    public findAll() {
      console.log("[find all tickets]");
      return this.http.get<Ticket[]>(this.ticketUrl + "/tickets", httpOptions);
    }
  
    public deleteById(ticket : Ticket) {
      console.log("[delete ticket]");
      return this.http.delete(this.ticketUrl + "/ticket/delete/" + ticket.ticketId, httpOptions);
    }
  
    public insert(ticket : Ticket) {
      console.log("[create ticket]");
      return this.http.post<Ticket>(this.ticketUrl + "/ticket/add", ticket, httpOptions);
    }
  
    public update(ticket : Ticket) {
      console.log("[update ticket]");
      return this.http.put<Ticket>(this.ticketUrl + "/ticket/add/" + ticket.ticketId, ticket, httpOptions);
    }
  
  }