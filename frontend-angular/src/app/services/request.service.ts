import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http"; 
import { Observable, throwError} from 'rxjs'; 
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RequestService {
  hostURL = "http://127.0.0.1:8000/api"
  headers = new HttpHeaders({
    "accept": "*/*",
    "content-type": "application/json"
  });

  constructor(private http: HttpClient) { }


  getObject(){
    let url = this.hostURL + "/todo"; 
    return this.http.get(url); 

  }

  postObject(post) {
    let body = JSON.stringify(post);
    let url = this.hostURL + "/todo";
    return this.http.post(url, body, { headers: this.headers });
  }

  updateObject(post){
    let body = JSON.stringify(post); 
    let url = this.hostURL + `/todo/${post.id}`
    return this.http.patch(url, body, {headers:this.headers}); 


  }

  deleteObject(id) {
    let url = this.hostURL + `/todo/${id}`;
    return this.http.delete(url, { headers: this.headers });
  }


}

