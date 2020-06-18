import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { AmendmentAction } from 'src/interfaces/AmendmentAction';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  // for the create form in main content
  modalFormActive:BehaviorSubject<boolean>;
  // for the update form in details component
  detailEditFormActive:BehaviorSubject<boolean>;
  // passing value from the main component to detail component
  detailSubject: BehaviorSubject<any>;
  
  constructor() { 
    this.modalFormActive = new BehaviorSubject<boolean>(false);
    this.detailEditFormActive = new BehaviorSubject<boolean>(false);
    this.detailSubject = new BehaviorSubject<any>({});
  }
  
  
  setDetailEditFormActive(){
    return this.detailEditFormActive.next(true);
  }
  setDetailEditFormInactive(){
    return this.detailEditFormActive.next(false);
  }
  setModalFormActive(){
    return this.modalFormActive.next(true);
  }
  setModalFormInactive(){
    return this.modalFormActive.next(false);
  }

  loadDetails(item?:AmendmentAction) {
    console.log('Utility service loadDetails() called!');
    
    this.detailSubject.next(item);
  }
}
