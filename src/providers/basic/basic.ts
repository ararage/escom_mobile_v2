import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BasicProvider {
  url:string
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:7070/api/'
  }

  getData(params:any): Observable<any>{
    return this.http.get(this.url+params)
  }

  postData(data:any,params:any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type','application/json')
    return this.http.post(this.url+params,data,{headers:headers})
  }

  putData(data:any,params:any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type','application/json')
    return this.http.put(this.url+params,data,{headers:headers})
  }

  deleteData(params:any): Observable<any>{
    return this.http.delete(this.url+params)
  }

}
