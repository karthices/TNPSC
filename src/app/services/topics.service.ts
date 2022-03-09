import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  url = 'http://localhost/vrtnpsc/mobileapi/getTopics';
  apiKey = ''; // <-- Enter your own key here!
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(`${this.url}?apikey=${this.apiKey}`).pipe(
      map(results => results['topics'])
    );
  }

  // getDetails(id) {
  //   return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  // }
}
