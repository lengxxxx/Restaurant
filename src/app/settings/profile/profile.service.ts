import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../../_helper/responseModel';
import { User } from '../user/user';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${environment.apiUrl}/users/v1/view-profile`);
  }

  updateProfile(user: User): Observable<User> {
    if (user.profilePic?.includes('http')) user.profilePic = undefined
    return this.http.put<User>(`${environment.apiUrl}/users/v1/update-profile`, user);
  }

  profileImage(id: string) {
    return `${environment.apiUrl}/Users/profile/image/${id}`;
  }
}
