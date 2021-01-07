import { Injectable } from '@angular/core';
import { State } from './state';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class StateService {

  private censusUrl = 'https://api.census.gov/data/2014/pep/natstprc?get=STNAME,POP&DATE_=7&for=state:*';

  constructor(private http: HttpClient) { }

  getStates(): Observable<string[]> {
    return this.http.get<string[]>(this.censusUrl);
  }

  getState(id: number): Observable<string[]> {
    return this.http.get<string[]>(`https://api.census.gov/data/2014/pep/natstprc?get=STNAME,POP&DATE_=7&for=state:${id}`);
  }
}
