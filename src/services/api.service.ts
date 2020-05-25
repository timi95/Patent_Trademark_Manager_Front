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
 getAccounts() {
    return  this.httpServer.get(`${this.API_URL}/accounts`);
}

 getAccountDetails(ID) {
  return this.httpServer.get(`${this.API_URL}/accounts/${ID}/details`);
}

 createAccount(account) {
  return  this.httpServer.post(`${this.API_URL}/accounts/`, account);
}

 updateAccount(account) {
  return this.httpServer.put(`${this.API_URL}/accounts/${account.id}/update`, account);
}

 deleteAccount(account) {
  return this.httpServer.delete(`${this.API_URL}/accounts/${account.id}/delete`, account);
}

}