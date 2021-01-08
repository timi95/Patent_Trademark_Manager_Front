import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ApiService { 
// JWT authentication

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

  // Generally applicable CRUD request function for all patent resources
  documentRequest(documentType:string, requestType:string, id?:any,requestBody?:any,resourceType?:string) {
    let RT = requestType? resourceType: "Instruction";
    switch (requestType.toLowerCase()) {
    //POST request case
      case "post":
        if (id && requestBody) {
          return this.httpServer.post(`${this.API_URL}/${RT}/${documentType}/${id}`, requestBody,this.httpOptions); 
        } else if( (id == null) && requestBody ){ 
          return this.httpServer.post(`${this.API_URL}/${RT}/${documentType}/`, requestBody,this.httpOptions);
        }
      break;

      //PUT request case
      case "put":
        if (id && requestBody) {
          return this.httpServer.put(`${this.API_URL}/${RT}/${documentType}/${id}`, requestBody,this.httpOptions); 
        } else if( (id == null) && requestBody ){ 
          return this.httpServer.put(`${this.API_URL}/${RT}/${documentType}/`, requestBody,this.httpOptions);
        }
        break;
    
      //PATCH request case
      case "patch":
        if (id && requestBody) {
          return this.httpServer.patch(`${this.API_URL}/${RT}/${documentType}/${id}`, requestBody,this.httpOptions); 
        } else if( (id == null) && requestBody ){ 
          return this.httpServer.patch(`${this.API_URL}/${RT}/${documentType}/`, requestBody,this.httpOptions);
        }
        break;
        
      //DELETE request case
      case "delete":
        if (id && (!requestBody)) {
          return this.httpServer.delete(`${this.API_URL}/${RT}/${documentType}/${id}`); 
        } else if( (id == null) && requestBody ){  
          return this.httpServer.delete(`${this.API_URL}/${RT}/${documentType}/`,requestBody);
        }
      break;

      //GET request case
      case "get":
        if (requestType.includes('get') && id) {
          return this.httpServer.get(`${this.API_URL}/${RT}/${documentType}/${id}`); 
        } else if(requestType.includes('get')) { 
          return this.httpServer.get(`${this.API_URL}/${RT}/${documentType}/`);
        }
      break;


      // default case
      default:
        if (id) {
          return this.httpServer.get(`${this.API_URL}/${RT}/${documentType}/${id}`); 
        } else { 
          return this.httpServer.get(`${this.API_URL}/${RT}/${documentType}/`);
        }
    }
  }

  orderPatentDocumentsByField(documentType:string,
                      orderByField:string,
                      managerType:string){
    return this.httpServer
    .get(`${this.API_URL}/${managerType}/${documentType}?ordering=${orderByField}`);
  }
  
  searchPatentDocumentsByDate(documentType:string,
                     date_from:string,
                     date_to:string,
                     managerType:string){
    return this.httpServer
    .get(`${this.API_URL}/${managerType}/${documentType}?date_from=${date_from}&date_to=${date_to}`);
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