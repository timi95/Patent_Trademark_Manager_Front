import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService { // JWT authentication

// http options used for making API calls
private httpOptions: any;

// the actual JWT token
public token: string;

// the token expiration date
public token_expires: Date;

// the username of the logged in user
public username: string;

// error messages received from the login attempt
public errors: any = [];


  API_URL  =  'http://localhost:8000';
  httpServer: HttpClient;

  constructor(private  httpClient:  HttpClient) {
      this.httpServer = httpClient;
      this.httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
  }




// ******************** // C R U D // ******************** //
 getAmendmentAction(id?:string) {
  if (id) {
    return this.httpServer.get(`${this.API_URL}/Patent_manager/ammendement-action/${id}`); 
  } else { 
    return this.httpServer.get(`${this.API_URL}/Patent_manager/ammendement-action/`);
  }
}

 createAmendmentAction(ammendement_action) {
  return this.httpServer.post(`${this.API_URL}/Patent_manager/ammendement-action/`, ammendement_action,this.httpOptions);
}

 updateAmendmentAction(ammendement_action) {
   console.log('id from api: ',ammendement_action.id, ammendement_action);
   
  return this.httpServer.put(`${this.API_URL}/Patent_manager/ammendement-action/${ammendement_action.id}`, ammendement_action);
}

 deleteAmendmentAction(ammendement_action) {
  return this.httpServer.delete(`${this.API_URL}/Patent_manager/ammendement-action/${ammendement_action.id}`, ammendement_action);
}


}