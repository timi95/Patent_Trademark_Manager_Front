import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  modalFormActive:BehaviorSubject<boolean>;

  constructor() { 
    this.modalFormActive = new BehaviorSubject<boolean>(false);
  }


  setModalFormActive(){
    return this.modalFormActive.next(true);
  }
  setModalFormInactive(){
    return this.modalFormActive.next(false);
  }
}
