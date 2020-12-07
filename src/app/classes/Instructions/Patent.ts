import { Instruction } from '../../interfaces/Instruction';
import { Action } from '../Action';

export class Patent implements Instruction {
    constructor(parameters) {
        
    }
    id: string;
    type_id: string;
    action_list: Action[];


    our_reference_number: string;
    client_id: string;
    clients_reference_number: string;
    current_instruction: string;
    date_of_instruction: Date;
    name_of_client: string;
    clients_address: string;
    clients_contact_person:string;
    name_of_patentee: string;
    patentee_address: string;
    date_instruction_received: Date;
    lawyer_responsible: string;
    invention_description: string;
    patent_registration_number: string;
    convention_country: string;
    current_status: string;
    certificate_procurement_due_date: Date;
    month_certificate_procurement_due: string;
    date_outgoing_abuja_schedule: Date;
    date_incoming_abuja_schedule: Date;
    date_completed_job_received: Date;
    official_fee: string;
    facilitation: string;
    incentive_due_clerk: string;
    clerk_responsible: string;
    month_incoming_abuja_schedule: string;
    month_outgoing_abuja_schedule: string;
    filing_receipt_status: string;
    applicable_service_charge: string;
    quickteller_fee: string;
}