import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { AmendmentAction } from 'src/interfaces/AmendmentAction';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  modalFormActive:BehaviorSubject<boolean>;
  detailSubject: Subject<AmendmentAction>;
  
  constructor() { 
    this.modalFormActive = new BehaviorSubject<boolean>(false);
    this.detailSubject = new Subject<AmendmentAction>();
  }
  
  
  setModalFormActive(){
    return this.modalFormActive.next(true);
  }
  setModalFormInactive(){
    return this.modalFormActive.next(false);
  }
  loadDetails(item:AmendmentAction) {
    this.detailSubject.next(item);
  }
}
