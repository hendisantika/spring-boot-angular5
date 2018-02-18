import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {User} from '../models/user.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {

  //private userUrl = 'http://localhost:8080/user-portal/user';
  private userUrl = '/api';

  constructor(private http: HttpClient) {
  }

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + '/' + user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }

}
