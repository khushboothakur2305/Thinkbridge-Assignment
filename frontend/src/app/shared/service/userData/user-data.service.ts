import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}
  userData: BehaviorSubject<any> = new BehaviorSubject(null);
  setUserData(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
    this.userData.next(userData);
  }
  getUserData() {
    return localStorage.getItem('userData');
  }
  removeUserData() {
    localStorage.removeItem('userData');
    this.userData.next(null);
  }
}
