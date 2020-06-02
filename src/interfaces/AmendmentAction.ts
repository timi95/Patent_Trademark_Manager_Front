export interface AmendmentAction {
    id?:number;
    date_amendment_instruction_received: string;
    nature_of_amendment: string;
    amending_clerk: string;
    date_amending_clerk_instructed: string;
    status_of_amendment: string;
    date_amendment_received: string;
}