import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { AmendmentAction } from 'src/interfaces/AmendmentAction';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  // for the create form in main content
  modalFormActive:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // for the update form in details component
  detailEditFormActive:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // for the delete form in details component
  detailDeleteFormActive:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // passing value from the main component to detail component
  detailSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});

  // documentList Subject
  documentListSubject: BehaviorSubject<Document[]> = new BehaviorSubject<Document[]>([]);
  // documentType Subject
  documentTypeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  // managerType Subject
  managerTypeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  // for the reminder create form Subject
  reminderCreateSubject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // for the reminder delete form
  reminderDeleteSubject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // reminder subject
  reminderSubject:Subject<Reminder> = new Subject<Reminder>();
  // reminderList subject
  reminderListSubject: BehaviorSubject<Reminder[]> = new BehaviorSubject<Reminder[]>([]);


  setDetailEditFormActive(){
    return this.detailEditFormActive.next(true);
  }
  setDetailEditFormInactive(){
    return this.detailEditFormActive.next(false);
  }

  setDetailDeleteFormActive(){
    return this.detailDeleteFormActive.next(true);
  }
  setDetailDeleteFormInactive(){
    return this.detailDeleteFormActive.next(false);
  }
  
  setModalFormActive(){
    return this.modalFormActive.next(true);
  }
  setModalFormInactive(){
    return this.modalFormActive.next(false);
  }

  
  setReminderCreateFormActive(){
    return this.reminderCreateSubject.next(true);
  }
  setReminderCreateFormInActive(){
    return this.reminderCreateSubject.next(false);
  }

  setReminderDeleteFormActive(){
    return this.reminderDeleteSubject.next(true);
  }
  setReminderDeleteFormInactive() {
    return this.reminderDeleteSubject.next(true);
  }

  loadReminder(reminder:Reminder){
    localStorage.setItem('reminderObject', JSON.stringify(reminder));
    let storeItem = JSON.parse(localStorage.getItem('reminderObject'));
    return this.reminderSubject.next(reminder);
  }

  loadDetails(item?:Document) {
    localStorage.setItem('detailsObject', JSON.stringify(item));
    let storeItem = JSON.parse(localStorage.getItem('detailsObject'));
    this.detailSubject.next(storeItem);
  }

  toList(target:object): any[] {
    let result: any[] = Object.entries(target);
    return result;
  }
  listToObject(target:any[]): object {
    let result = Object.fromEntries(target);
    return result;
  }

  updateDocumentList(){
    this.documentListSubject.next(JSON.parse(localStorage.getItem('documentList')));
  }
  updateDocumentType(){
    this.documentTypeSubject.next(localStorage.getItem('documentType'));
  }
  updateManagerType(){
    this.managerTypeSubject.next(localStorage.getItem('managerType'));
  }

  updateReminderList(list?:Reminder[]){
    if (list) {
      this.reminderListSubject.next(list);
    } else {
      this.reminderListSubject.next(JSON.parse(localStorage.getItem('reminderList')));
    }
  }
}

interface Document {
  id:any;
  title:string;
  body:string;
  attachment?:any;
  footer?:string;
}
interface Reminder {
  id:any;
  title :string;
  reminder_detail:string;
  reminder_date :any;
  manager_type :string;
  document_type:string;
  document_id:string;
}