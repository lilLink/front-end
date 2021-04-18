import { Flight } from "./flight.model";
import { Ticket } from "./ticket.model";
import { TypeCompany } from "./type.model";

export class Company{
    companyId: BigInteger | undefined;

    name: string | undefined;

    website: string | undefined;

    description: string | undefined;

    phoneNumber: string | undefined;

    typeCompany: TypeCompany = TypeCompany.Bus;

    tickets: Ticket[] = [];
}