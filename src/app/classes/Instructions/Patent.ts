import { Action } from 'src/app/interfaces/Action';
import { InstructionImage } from 'src/app/interfaces/InstructionImage';
import { Instruction } from '../../interfaces/Instruction';

export class Patent implements Instruction {
    constructor(parameters) {

    }
    id: string;
    type_id: string;
    action_list: Action[];
    image_list: InstructionImage[];


    patent_title:string;
    registration_date:Date;
    invention_title:string;
    application_number:string;
    patentee_name:string;
    patentee_address:string;

    our_reference_number: string;
    client_id: string;
    clients_reference_number: string;
    current_instruction: string;
    date_of_instruction: Date;
    name_of_client: string;
    clients_address: string;
    clients_contact_person:string;
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
