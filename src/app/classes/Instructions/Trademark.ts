import { Action } from 'src/app/interfaces/Action';
import { InstructionImage } from 'src/app/interfaces/InstructionImage';
import { Instruction } from '../../interfaces/Instruction';

export class Trademark implements Instruction {
    constructor(parameters) {}
    id: string;
    type_id: string;
    action_list: Action[];

    // opposition_list: Opposition[];

    applicable_official_fee:Date;
    applicable_service_charge:string;
    trademark_class:string;
    clerk_responsible:string;
    clients_email_address:string;
    clients_id:string;
    clients_address:string;
    clients_contact_person:string;
    client_ref_no:string;
    correspondence_date:Date;
    current_instruction:string;
    current_status:string;
    date_instruction_received:Date;
    date_current_instruction:Date;
    date_completed_job_received:Date;
    date_incoming_abj_schedule:Date;
    date_outgoing_abj_schedule:Date;
    filing_receipt:string;
    goods:string;
    incentive_due_clerk:string;
    lawyer_responsible:string;
    month_incoming_schedule:string;
    month_outgoing_schedule:string;
    name_of_client:string;
    name_of_proprietor:string;
    official_fee_ctc:string;
    official_fee_late_renewal_penalty:string;
    official_fee_merger:string;
    official_fee_registered_user:string;
    our_ref_no:string;
    proprietors_address:string;
    quicktellers_fee:string;
    registration_no:string;
    trademark_description:string
}
