export interface Reminder {
    id:any,
    instruction_ref:string,
    reminder_creation_time:Date,
    reminder_date_time: Date,
    is_matured: boolean,
    reminder_message_title:string,
    reminder_message_body:string
  }