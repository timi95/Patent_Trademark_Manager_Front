import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'


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


  API_URL  =  environment.apiUrl;
  httpServer: HttpClient;

  constructor(private  httpClient:  HttpClient) {
      this.httpServer = httpClient;
      this.httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
  }




// ******************** // C R U D // ******************** //

  // Generally applicaple request function for all patent resources
  patentDocumentRequest(documentType:string, 
                        requestType:string,
                        id?:number,
                        requestBody?:any) {
    switch (requestType.toLowerCase()) {
    //POST request case
      case "post":
        if ((id > 0) && requestBody) {
          return this.httpServer.post(`${this.API_URL}/Patent_manager/${documentType}/${id}`, requestBody,this.httpOptions); 
        } else if( (id <= 0) && requestBody ){ 
          return this.httpServer.post(`${this.API_URL}/Patent_manager/${documentType}/`, requestBody,this.httpOptions);
        }

      //PUT request case
      case "put":
        if ((id > 0) && requestBody) {
          return this.httpServer.put(`${this.API_URL}/Patent_manager/${documentType}/${id}`, requestBody,this.httpOptions); 
        } else if( (id <= 0) && requestBody ){ 
          return this.httpServer.put(`${this.API_URL}/Patent_manager/${documentType}/`, requestBody,this.httpOptions);
        }
    
      //PATCH request case
      case "patch":
        if ((id > 0) && requestBody) {
          return this.httpServer.patch(`${this.API_URL}/Patent_manager/${documentType}/${id}`, requestBody,this.httpOptions); 
        } else if( (id <= 0) && requestBody ){ 
          return this.httpServer.patch(`${this.API_URL}/Patent_manager/${documentType}/`, requestBody,this.httpOptions);
        }
      
      //GET request case
      case "get":
        if (id) {
          return this.httpServer.get(`${this.API_URL}/Patent_manager/${documentType}/${id}`); 
        } else { 
          return this.httpServer.get(`${this.API_URL}/Patent_manager/${documentType}/`);
        }

      //DELETE request case
      case "delete":
        if (id) {
          return this.httpServer.delete(`${this.API_URL}/Patent_manager/${documentType}/${id}`); 
        } else if(requestBody) { 
          return this.httpServer.delete(`${this.API_URL}/Patent_manager/${documentType}/`,requestBody);
        }
      // default case
      default:
        if (id) {
          return this.httpServer.get(`${this.API_URL}/Patent_manager/${documentType}/${id}`); 
        } else { 
          return this.httpServer.get(`${this.API_URL}/Patent_manager/${documentType}/`);
        }
    }
  }


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