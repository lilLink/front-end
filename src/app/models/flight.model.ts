import { Ticket } from "./ticket.model";

export class Flight{
    flightId: BigInteger | undefined;

    fromCity: string | undefined;

    toCity: string | undefined;

    flightNumber: Int16Array | undefined;

    tickets: Ticket[] = [];
}