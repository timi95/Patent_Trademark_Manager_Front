import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  error_messages:string[] = [];
  success_messages:string[] = [];

  constructor() { }

  pushError( message: string ){
    this.error_messages.push(message);
  }

  pushSuccess( message: string ) {
    this.success_messages.push(message);
  }


  clear(){
    this.error_messages=[];
    this.success_messages=[];
  }

}
