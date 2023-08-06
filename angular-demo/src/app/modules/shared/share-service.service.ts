import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {
  messageService = new BehaviorSubject('');
  currentMessageService = this.messageService.asObservable();
  url = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }
  getPost() {
     return this.http.get(`${this.url}posts`);
  }
  setMassage(value) {
    console.log('setMassage');
    
    this.messageService.next(value);
  }
}
