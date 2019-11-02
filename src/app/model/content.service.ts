import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private url = 'assets/data/content.json';

  constructor(private http: HttpClient) {

  }

  getContent(): Observable<Map<string, string>> {
    return this.http.get<Map<string, string>>(this.url);
  }
}
