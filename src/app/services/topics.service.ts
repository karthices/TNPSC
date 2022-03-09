import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  url = 'http://localhost:82/vr/vrtnpsc/mobileapi/';
  apiKey = ''; // <-- Enter your own key here!
  constructor(private http: HttpClient) { }

  getTopics(): Observable<any> {
    return this.http.get(`${this.url}getTopics?apikey=${this.apiKey}`).pipe(
      map(results => results['topics'])
    );
  }

  getMaterialsByTopicId(id):Observable<Material[]> {
    return this.http.get(`${this.url}getMaterialsByTopicId/${id}?apikey=${this.apiKey}`).pipe(
      map(results => results['materials'])
    );
  }
  
  getMaterials() :Observable<Material[]>{
    return this.http.get(`${this.url}getMaterials?apikey=${this.apiKey}`).pipe(
      map(results => results['materials'])
    );
  }
  
  getMaterialById(id):Observable<Material> {
    return this.http.get(`${this.url}getMaterialById/${id}?apikey=${this.apiKey}`).pipe(
      map(results => results['materials'])
    );
  }
}
