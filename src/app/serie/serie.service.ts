import { Injectable } from '@angular/core';
import { Serie } from './serie';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private apiUrl: string = environment.baseUrl + '/series.json';

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]> {
    console.log(this.apiUrl);
    return this.http.get<Serie[]>(this.apiUrl);
  }
}
