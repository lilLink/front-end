import { Time } from "@angular/common";

export class Ticket{
    ticketId: BigInteger | undefined;

    beginTime: Date | undefined;

    endTime: Date | undefined;

    place: string | undefined;

    price: string | undefined;

    ticketClass: string | undefined;

    ticketDescription: string | undefined;

    fromCity: string | undefined;

    toCity: string | undefined;

    flightNumber: Int16Array | undefined;
}