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

    // create form types for Kotlin backend
    patentCreateForm = {
        action_list: {value:[], type:"list"},
        applicable_service_charge: {value:"default value", type:"text"},
        certificate_procurement_due_date: { value: new Date(), type: "datetime-local"},
        clerk_responsible: {value:"default value", type:"text"},
        client_id: {value:"default value", type:"text"},
        clients_address: {value:"default value", type:"text"},
        clients_contact_person: {value:"default value", type:"text"},
        clients_reference_number: {value:"default value", type:"text"},
        convention_country: {value:"default value", type:"text"},
        current_instruction: {value:"default value", type:"text"},
        current_status: {value:"default value", type:"text"},
        date_completed_job_received: { value: new Date(), type: "datetime-local"},
        date_incoming_abuja_schedule: { value: new Date(), type: "datetime-local"},
        date_instruction_received: { value: new Date(), type: "datetime-local"},
        date_of_instruction: { value: new Date(), type: "datetime-local"},
        date_outgoing_abuja_schedule: { value: new Date(), type: "datetime-local"},
        facilitation: {value:"default value", type:"text"},
        filing_receipt_status: {value:"default value", type:"text"},
        incentive_due_clerk: {value:"default value", type:"text"},
        invention_description: {value:"default value", type:"text"},
        lawyer_responsible: {value:"default value", type:"text"},
        month_certificate_procurement_due: {value:"default value", type:"text"},
        month_incoming_abuja_schedule: {value:"default value", type:"text"},
        month_outgoing_abuja_schedule: {value:"default value", type:"text"},
        name_of_client: {value:"default value", type:"text"},
        name_of_patentee: {value:"default value", type:"text"},
        official_fee: {value:"default value", type:"text"},
        our_reference_number: {value:"default value", type:"text"},
        patent_registration_number: {value:"default value", type:"text"},
        patentee_address: {value:"default value", type:"text"},
        quickteller_fee: {value:"default value", type:"text"},
        type_id: {value:"patent", type:"type_id"},
    }

    P_assignmentMergerActionCreateForm = {
        assignee: {value:"default value", type:"text"},
        assignee_address: {value:"default value", type:"text"},
        assignment_instruction_date: {value: new Date(), type:"datetime-local"},
        assignment_instruction_month: {value:"default value", type:"text"},
        assignor: {value:"default value", type:"text"},
        assignor_address: {value:"default value", type:"text"},
        clerk_assigning: {value:"default value", type:"text"},
        clerk_assignment: {value:"default value", type:"text"},
        date_abuja_instructed_assignment: {value: new Date(), type:"datetime-local"},
        date_assignment_certificate_received: {value: new Date(), type:"datetime-local"},
        date_facilitation_assignment_cert_sent: {value: new Date(), type:"datetime-local"},
        date_facilitation_assignment_cert_sent_sent: {value: new Date(), type:"datetime-local"},
        id: {value:"default value", type:"text"},
        instruction_ref: {value:"default value", type:"text"},
        official_fee_assignment: {value:"default value", type:"text"},
        status_assignment_registrations: {value:"default value", type:"text"},
        type_id: {value:"default value", type:"text"},
    }

    P_renewalActionCreateForm = {
        PCT_filling_date: {value: new Date(), type:"datetime-local"},
        PCT_ref_no: {value: "default value", type:"text"},
        acceptance_date: {value: new Date(), type:"datetime-local"},
        acknowledgement_status: {value: "default value", type:"text"},
        application_no: {value: "default value", type:"text"},
        cert_procurement_date: {value: new Date(), type:"datetime-local"},
        cert_procurement_month: {value: "default value", type:"text"},
        clerk_registration: {value: "default value", type:"text"},
        clients_contact_person: {value: "default value", type:"text"},
        convention_priority_date_1: {value: new Date(), type:"datetime-local"},
        convention_priority_date_2: {value: new Date(), type:"datetime-local"},
        convention_priority_date_3: {value: new Date(), type:"datetime-local"},
        convention_priority_ref_1: {value: "default value", type:"text"},
        convention_priority_ref_2: {value: "default value", type:"text"},
        convention_priority_ref_3: {value: "default value", type:"text"},
        correspondence_date: {value: new Date(), type:"datetime-local"},
        date_abuja_instructed_for_registration: {value: new Date(), type:"datetime-local"},
        date_of_instruction: {value: new Date(), type:"datetime-local"},
        date_registration_instruction_received: {value: new Date(), type:"datetime-local"},
        filling_deadline: {value: "default value", type:"text"},
        id: {value: "default value", type:"text"},
        instruction_ref: {value: "default value", type:"text"},
        month_registration_instruction_received: {value: "default value", type:"text"},
        official_fee_registration: {value: "default value", type:"text"},
        patent_registration_filling_date: {value: new Date(), type:"datetime-local"},
        patent_registration_no: {value: "default value", type:"text"},
        registration_filling_month: {value: "default value", type:"text"},
        registration_status: {value: "default value", type:"text"},
        type_id: "action"
    }

    P_searchActionCreateForm = {
        id: {value: "default value", type:"text"},
        instruction_ref: {value: "default value", type:"text"},
        clerk_searching: {value: "default value", type:"text"},
        date_reported_to_client: {value: new Date(), type:"datetime-local"},
        reported_to_client: {value: "default value", type:"text"},
        search_status: {value: "default value", type:"text"},
        type_id: "action"
    }

    P_registrationActionCreateForm = {
        PCT_filling_date: {value: new Date(), type:"datetime-local"},
        PCT_ref_no: {value: "default value", type:"text"},
        acceptance_date: {value: new Date(), type:"datetime-local"},
        acknowledgement_status: {value: "default value", type:"text"},
        application_no: {value: "default value", type:"text"},
        cert_procurement_date: {value: new Date(), type:"datetime-local"},
        cert_procurement_month: {value: "default value", type:"text"},
        clerk_registration: {value: "default value", type:"text"},
        clients_contact_person: {value: "default value", type:"text"},
        convention_priority_date_1: {value: new Date(), type:"datetime-local"},
        convention_priority_date_2: {value: new Date(), type:"datetime-local"},
        convention_priority_date_3: {value: new Date(), type:"datetime-local"},
        convention_priority_ref_1: {value: "default value", type:"text"},
        convention_priority_ref_2: {value: "default value", type:"text"},
        convention_priority_ref_3: {value: "default value", type:"text"},
        correspondence_date: {value: new Date(), type:"datetime-local"},
        date_abuja_instructed_for_registration: {value: new Date(), type:"datetime-local"},
        date_of_instruction: {value: new Date(), type:"datetime-local"},
        date_registration_instruction_received: {value: new Date(), type:"datetime-local"},
        filling_deadline: {value: "default value", type:"text"},
        id: {value: "default value", type:"text"},
        instruction_ref: {value: "default value", type:"text"},
        month_registration_instruction_received: {value: "default value", type:"text"},
        official_fee_registration: {value: "default value", type:"text"},
        patent_registration_filling_date: {value: new Date(), type:"datetime-local"},
        patent_registration_no: {value: "default value", type:"text"},
        registration_filling_month: {value: "default value", type:"text"},
        registration_status: {value: "default value", type:"text"},
        type_id: "action"
    }

    P_procurementOfCertificateActionCreateForm = {
        application_no: {value: "default value", type:"text"},
        clerk_procuring: {value: "default value", type:"text"},
        date_cert_procured: {value: new Date(), type:"datetime-local"},
        date_cert_procurement_due: {value: new Date(), type:"datetime-local"},
        date_procurement_instructed: {value: new Date(), type:"datetime-local"},
        id: {value: "default value", type:"text"},
        instruction_ref: {value: "default value", type:"text"},
        invention_description: {value: "default value", type:"text"},
        month_cert_procurement_due: {value: "default value", type:"text"},
        month_clerk_instructed: {value: "default value", type:"text"},
        patent_registration_no: {value: "default value", type:"text"},
        procurement_status: {value: "default value", type:"text"},
        type_id: "action"
    }

    P_CTCActionCreateForm = {
        application_no: {value: "default value", type:"text"},
        clerk_responsible: {value: "default value", type:"text"},
        ctc_procurement_status: {value: "default value", type:"text"},
        ctc_required: {value: "default value", type:"text"},
        date_applied_for_ctc: {value: new Date(), type:"datetime-local"},
        id: {value: "default value", type:"text"},
        instruction_ref: {value: "default value", type:"text"},
        patent_registration_no: {value: "default value", type:"text"},
        type_id: "action"
    }

    P_changeOfNameActionCreateForm = {
        change_of_name_instruction_date: {value: new Date(), type:"datetime-local"},
        change_of_name_instruction_month: {value: "default value", type:"text"},
        clerk_for_change_of_name: {value: "default value", type:"text"},
        date_received_change_of_name_certificate: {value: new Date(), type:"datetime-local"},
        id: {value: "default value", type:"text"},
        instruction_ref: {value: "default value", type:"text"},
        new_name_of_patentee: {value: "default value", type:"text"},
        status_of_change_of_name: {value: "default value", type:"text"},
        type_id: "action"
    }

    P_changeOfAddressActionCreateForm = {
        change_of_address_instruction_date: {value: new Date(), type:"datetime-local"},
        change_of_address_instruction_month: {value: "default value", type:"text"},
        clerk_of_change_of_address: {value: "default value", type:"text"},
        date_received_change_of_address_certificate: {value: new Date(), type:"datetime-local"},
        id: {value: "default value", type:"text"},
        instruction_ref: {value: "default value", type:"text"},
        new_address_of_patentee: {value: "default value", type:"text"},
        status_change_of_address: {value: "default value", type:"text"},
        type_id: "action"
    }

    constructor() {
    }
    
}