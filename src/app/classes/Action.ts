import { AmendmentAction } from 'src/interfaces/AmendmentAction';

export class Action implements AmendmentAction, SearchAction {
    // Id
    id: number;
    constructor() {
    }
    // Search Action properties
    search_status: string;
    reported_to_client: string;
    date_reported_to_client: string;
    clerk_searching: string;


    // Ammendment Action Properties
    date_amendment_instruction_received: string;
    nature_of_amendment: string;
    amending_clerk: string;
    date_amending_clerk_instructed: string;
    status_of_amendment: string;
    date_amendment_received: string;


    // 
}