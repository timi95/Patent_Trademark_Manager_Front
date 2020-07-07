import { AmendmentAction } from 'src/interfaces/AmendmentAction';

export class Action implements AmendmentAction {
    constructor() {
    }
    // Id
    id: number;

    // Ammendment Action Properties
    date_amendment_instruction_received: string;
    nature_of_amendment: string;
    amending_clerk: string;
    date_amending_clerk_instructed: string;
    status_of_amendment: string;
    date_amendment_received: string;


    // 
}