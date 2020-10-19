import { FormControl, Validators } from '@angular/forms';

export class Form {
    P_amendment_action =  {
        date_amendment_instruction_received: "",
        nature_of_amendment: new FormControl('', [Validators.required]),
        amending_clerk: new FormControl('', [Validators.required]),
        date_amending_clerk_instructed: "",
        status_of_amendment: new FormControl('', [Validators.required]),
        date_amendment_received: ""
    };
    P_assignment_merger_action: any = {
        assignment_instruction_date: new FormControl('', [Validators.required]),
        assignment_instruction_month: new FormControl('', [Validators.required]),
        date_abuja_instructed_assignment: "",
        clerk_assignment: new FormControl('', [Validators.required]),
        status_assignment_registrations: new FormControl('', [Validators.required]),
        assignor: new FormControl('', [Validators.required]),
        assignor_address: new FormControl('', [Validators.required]),
        assignee: new FormControl('', [Validators.required]),
        assignee_address: new FormControl('', [Validators.required]),
        date_assignment_certificate_received: ""
    };
    P_change_address: any = {
        change_of_address_instruction_date: new FormControl('', [Validators.required]),
        change_of_address_instruction_month: new FormControl('', [Validators.required]),
        new_address_of_patentee: new FormControl('', [Validators.required]),
        clerk_of_change_of_address: new FormControl('', [Validators.required]),
        status_change_of_address: new FormControl('', [Validators.required]),
        date_received_change_of_address_certificate: ''
    };
    P_change_name: any = {
        change_of_name_instruction_date: '',
        change_of_name_instruction_month: new FormControl('', [Validators.required]),
        new_name_of_patentee: new FormControl('', [Validators.required]),
        clerk_for_change_of_name: new FormControl('', [Validators.required]),
        status_of_change_of_name: new FormControl('', [Validators.required]),
        date_received_change_of_name_certificate: ''
    };
    P_ctc: any = {
        application_no: new FormControl('', [Validators.required]),
        patent_registration_no: new FormControl('', [Validators.required]),
        ctc_required: new FormControl('', [Validators.required]),
        date_applied_for_ctc: '',
        ctc_procurement_status: new FormControl('', [Validators.required]),
        clerk_responsible: new FormControl('', [Validators.required])
    };
    P_patent_particulars: any = {
        our_reference_number: new FormControl('', [Validators.required]),
        client_id: new FormControl('', [Validators.required]),
        clients_reference_number: new FormControl('', [Validators.required]),
        curent_instruction: new FormControl('', [Validators.required]),
        date_of_instruction: '',
        name_of_client: new FormControl('', [Validators.required]),
        clients_address: new FormControl('', [Validators.required]),
        clients_contact_person: new FormControl('', [Validators.required]),
        name_of_patentee: new FormControl('', [Validators.required]),
        patentees_address: new FormControl('', [Validators.required]),
        date_instruction_received: '',
        lawyer_responsible: new FormControl('', [Validators.required]),
        invention_description: new FormControl('', [Validators.required]),
        patent_registration_number: new FormControl('', [Validators.required]),
        convention_country: new FormControl('', [Validators.required]),
        current_status: new FormControl('', [Validators.required]),
        date_certificate_procurement_due: '',
        month_certificate_procurement_due: new FormControl('', [Validators.required]),
        date_outgoing_abuja_schedule: '',
        date_incoming_abuja_schedule: '',
        date_completed_job_received: '',
        official_fee: 0,
        facilitation: 0,
        incentive_due_clerk: new FormControl('', [Validators.required]),
        clerk_responsible: new FormControl('', [Validators.required]),
        month_incoming_abuja_schedule: new FormControl('', [Validators.required]),
        month_outgoing_abuja_schedule: new FormControl('', [Validators.required]),
        filing_receipt_status: new FormControl('', [Validators.required]),
        applicable_service_charge: 0,
        quickteller_fee: 0
    };
    P_procurement: any = {
        date_procurement_instructed: '',
        application_no: new FormControl('', [Validators.required]),
        invention_description: new FormControl('', [Validators.required]),
        clerk_procuring: new FormControl('', [Validators.required]),
        month_clerk_instructed: new FormControl('', [Validators.required]),
        procurement_status: new FormControl('', [Validators.required]),
        date_cert_procured: '',
        patent_regtn_no: new FormControl('', [Validators.required]),
        date_cert_procurement_due: '',
        month_cert_procurement_due: new FormControl('', [Validators.required])
    };
    P_registration: any = {
        date_registration_instruction_received: '',
        month_registration_instruction_received: new FormControl('', [Validators.required]),
        clerk_registration: new FormControl('', [Validators.required]),
        date_abuja_instructed_for_registration: '',
        convention_priority_ref_1: new FormControl('', [Validators.required]),
        convention_priority_date_1: '',
        convention_priority_ref_2: new FormControl('', [Validators.required]),
        convention_priority_date_2: '',
        convention_priority_ref_3: new FormControl('', [Validators.required]),
        convention_priority_date_3: '',
        PCT_ref_no: new FormControl('', [Validators.required]),
        PCT_filling_date: '',
        filling_deadline: new FormControl('', [Validators.required]),
        application_no: new FormControl('', [Validators.required]),
        patent_registration_filling_date: '',
        registration_filling_month: new FormControl('', [Validators.required]),
        registration_status: new FormControl('', [Validators.required]),
        acknowledgement_status: new FormControl('', [Validators.required]),
        acceptance_date: '',
        cert_procurement_date: '',
        cert_procurment_month: new FormControl('', [Validators.required]),
        patent_registration_no: new FormControl('', [Validators.required]),
        correspondence_date: '',
        date_of_instruction: '',
        clients_contact_person: new FormControl('', [Validators.required]),
        official_fee_registration: new FormControl('', [Validators.required])
    };
    P_renewal_action: any  = {
        date_registration_instruction_received: '',
        month_registration_instruction_received: new FormControl('', [Validators.required]),
        clerk_registration: new FormControl('', [Validators.required]),
        date_abuja_instructed_for_registration: '',
        convention_priority_ref_1: new FormControl('', [Validators.required]),
        convention_priority_date_1: '',
        convention_priority_ref_2: new FormControl('', [Validators.required]),
        convention_priority_date_2: '',
        convention_priority_ref_3: new FormControl('', [Validators.required]),
        convention_priority_date_3: '',
        PCT_ref_no: new FormControl('', [Validators.required]),
        PCT_filling_date: '',
        filling_deadline: new FormControl('', [Validators.required]),
        application_no: new FormControl('', [Validators.required]),
        patent_registration_filling_date: '',
        registration_filling_month: new FormControl('', [Validators.required]),
        registration_status: new FormControl('', [Validators.required]),
        acknowledgement_status: new FormControl('', [Validators.required]),
        acceptance_date: '',
        cert_procurement_date: '',
        cert_procurment_month: new FormControl('', [Validators.required]),
        patent_registration_no: new FormControl('', [Validators.required]),
        correspondence_date: '',
        date_of_instruction: '',
        clients_contact_person: new FormControl('', [Validators.required]),
        official_fee_registration: new FormControl('', [Validators.required])
    };
    P_search_action: any = {
        search_status: new FormControl('', [Validators.required]),
        reported_to_client: new FormControl('', [Validators.required]),
        date_reported_to_client: '',
        clerk_searching: new FormControl('', [Validators.required])
    };



    
    T_amendment_action:any = {
        ammendement_instruction_date: "",
        date_ammendement_instruction_received: "",
        nature_of_amendment: new FormControl('', [Validators.required]),
        date_amending_clerk_instructed: "",
        status_of_amendment: new FormControl('', [Validators.required]),
        date_amendment_received: ""
    };
    T_assignment_merger_action: any = {
        assignment_instruction_date: new FormControl('', [Validators.required]),
        assignment_instruction_month: new FormControl('', [Validators.required]),
        assignee: new FormControl('', [Validators.required]),
        assignee_address: new FormControl('', [Validators.required]),
        assignor: new FormControl('', [Validators.required]),
        assignor_address: new FormControl('', [Validators.required]),
        clerk_assigning: new FormControl('', [Validators.required]),
        date_abuja_instructed_assignment: "",
        date_assignment_certificate_received: "",
        date_facillitation_assignment_cert_sent: "",
        date_facillitation_assignment_cert_sent_sent: "",
        official_fee_assignment: new FormControl('', [Validators.required]),
        status_assignment_registrations: new FormControl('', [Validators.required]),
    }
    T_certificate_procurement_action:any = {
        date_procurement_instructed: "",
        application_no: new FormControl('', [Validators.required]),
        trademark_description: new FormControl('', [Validators.required]),
        journal_no: new FormControl('', [Validators.required]),
        journal_vol: new FormControl('', [Validators.required]),
        journal_date: "",
        journal_page: new FormControl('', [Validators.required]),
        date_clerk_instructed_to_procure: "",
        cert_procurement_status: new FormControl('', [Validators.required]),
        date_registration_certificate: "",
        registration_no: new FormControl('', [Validators.required]),
        official_fee_certificate_issuance: new FormControl('', [Validators.required]),
      };
    T_change_name_address_action:any = {
        change_of_address_instruction_date: '',
        change_of_name_instruction_date: '',
        date_received_change_of_address_certificate: '',
        date_received_change_of_name_certificate: '',
        new_address_of_pptr: new FormControl('', [Validators.required]),
        new_name_of_pptr: new FormControl('', [Validators.required]),
        official_fee_change_name: new FormControl('', [Validators.required]),
        official_fee_change_address: new FormControl('', [Validators.required]),
        status_change_of_name: new FormControl('', [Validators.required]),
        status_change_of_address: new FormControl('', [Validators.required])
    };
    T_profile:any = {
        "applicable_official_fee": new FormControl('', [Validators.required]),
        "applicable_service_charge": new FormControl('', [Validators.required]),
        "trademark_class": new FormControl('', [Validators.required]),
        "clerk_responsible": new FormControl('', [Validators.required]),
        "clients_email_address": new FormControl('', [Validators.required]),
        "clients_id": new FormControl('', [Validators.required]),
        "clients_address": new FormControl('', [Validators.required]),
        "clients_contact_person": new FormControl('', [Validators.required]),
        "client_ref_no": new FormControl('', [Validators.required]),
        "correspondence_date": "",
        "current_instruction": new FormControl('', [Validators.required]),
        "current_status": new FormControl('', [Validators.required]),
        "date_instruction_received": "",
        "date_current_instruction": "",
        "date_completed_job_received": "",
        "date_incoming_abj_schedule": "",
        "date_outgoing_abj_schedule": "",
        "filing_receipt": new FormControl('', [Validators.required]),
        "goods": new FormControl('', [Validators.required]),
        "incentive_due_clerk": new FormControl('', [Validators.required]),
        "lawyer_responsible": new FormControl('', [Validators.required]),
        "month_incoming_schedule": new FormControl('', [Validators.required]),
        "month_outgoing_schedule": new FormControl('', [Validators.required]),
        "name_of_client": new FormControl('', [Validators.required]),
        "name_of_proprietor": new FormControl('', [Validators.required]),
        "official_fee_ctc": new FormControl('', [Validators.required]),
        "official_fee_late_renewal_penalty": new FormControl('', [Validators.required]),
        "official_fee_merger": new FormControl('', [Validators.required]),
        "official_fee_registered_user": new FormControl('', [Validators.required]),
        "our_ref_no": new FormControl('', [Validators.required]),
        "proprietors_address": new FormControl('', [Validators.required]),
        "quicktellers_fee": new FormControl('', [Validators.required]),
        "registration_no": new FormControl('', [Validators.required]),
        "trademark_description": new FormControl('', [Validators.required]),
    };
    T_reclassification_action:any = {
        date_reclassification_instruction: "",
        date_abj_instructed_reclassify: "",
        reclassification_status: new FormControl('', [Validators.required]),
        date_publication_of_reclassification: "",
        journal_pg_reclassification: new FormControl('', [Validators.required]),
    };
    T_registration_action:any = {
        acceptance_date: "",
        acceptance_facilitation_sent: new FormControl('', [Validators.required]),
        acknowledgement_date: "",
        acknowledgement_facilitation_sent: new FormControl('', [Validators.required]),
        application_no: new FormControl('', [Validators.required]),
        trademark_class: 0,
        clerk_registering: new FormControl('', [Validators.required]),
        colour_limitation: new FormControl('', [Validators.required]),
        date_acceptance_facilitation_sent: "",
        date_acknowledgement_facilitation_sent: "",
        date_of_registration_instruction: "",
        date_of_registration_instruction_received: "",
        date_registration_cert_facilitation_sent: "",
        date_sent_for_publication: "",
        date_abj_instructed_for_registration: "",
        goods: new FormControl('', [Validators.required]),
        journal_date: "",
        journal_no: new FormControl('', [Validators.required]),
        journal_page: new FormControl('', [Validators.required]),
        journal_vol: new FormControl('', [Validators.required]),
        official_fee_registration: new FormControl('', [Validators.required]),
        publication: new FormControl('', [Validators.required]),
        registration_status: new FormControl('', [Validators.required]),
        registration_filing_month: new FormControl('', [Validators.required]),
        registration_no: new FormControl('', [Validators.required]),
        registraion_cert_facilitation_sent: new FormControl('', [Validators.required]),
        tm_registration_filing_date: ""
    };
    T_renewal_action:any = {
        date_renewal_cert_facilitation_sent: "",
        dt_abj_instructed_renewal: "",
        dt_renew_cert_received: "",
        next_renewal_due_date: "",
        next_renewal_due_month: new FormControl('', [Validators.required]),
        official_fee_renewal: new FormControl('', [Validators.required]),
        renewal_cert_facilitation_sent: new FormControl('', [Validators.required]),
        renewal_due_date: "",
        renewal_due_month: new FormControl('', [Validators.required]),
        renewal_instruction_date: new FormControl('', [Validators.required]),
        renewal_instruction_month: new FormControl('', [Validators.required]),
        renewal_status: new FormControl('', [Validators.required])
    };
    T_search_action:any = {
        clerk_searching: new FormControl('', [Validators.required]),
        conflicting_mark: new FormControl('', [Validators.required]),
        date_of_search_report: "",
        date_reported_to_client: "",
        official_search_fee: 0,
        reported_to_client: new FormControl('', [Validators.required]),
        search_instruction_date: "",
        search_status: new FormControl('', [Validators.required]),
        search_type: new FormControl('', [Validators.required])
    };

    R_reminderForm = {
        title: new FormControl('', [Validators.required]),
        reminder_detail: new FormControl('', [Validators.required]),
        reminder_date: "",
        manager_type: new FormControl('', [Validators.required]),
        document_type: new FormControl('', [Validators.required]),
        document_id: new FormControl('', [Validators.required]),
    }

    constructor() {
    }
    
}