import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private apiUrl = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

  constructor(private http: HttpClient) {}

  getTop100Albums(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
