import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = 'http://antonintouron.fr/private/theo/public/api/'

  constructor(private http: HttpClient) { }

  searchFilms(): Observable<any> {
        return this.http.get(
            `${this.url}film`).pipe(
            map(results => results)
        );
    }
}
