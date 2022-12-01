import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private HttpClient:HttpClient ) { }

    url = "http://localhost:3000/login"

  login( usuario: User ): Observable<any> {
    return this.HttpClient.post(this.url,JSON.stringify(usuario),{
        headers: new HttpHeaders({'Content-Type':'application/json'}),
        observe: "response"

    })
  }
}
