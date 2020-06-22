import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class QuickstartService {

  baseurl = "http://127.0.0.1:8000/"
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  getAllMovies():Observable<any>{
    return this.http.get(this.baseurl + 'movies/', {headers:this.httpHeaders});
  }
}
