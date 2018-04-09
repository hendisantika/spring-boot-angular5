import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {

  private userUrl = 'http://localhost:8080/user-portal/api';

  constructor(private http: HttpClient) {
  }

  public getUsers() {
    return this.http.get(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + '/' + user.id);
  }

  public createUser(user) {
    return this.http.post(this.userUrl, user);
  }

}
