import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseurl='http://localhost:4000/user/'
  constructor (private http:HttpClient){ }
  public login(user){
    return this.http.post(this.baseurl+'/login',user);
  }
}
