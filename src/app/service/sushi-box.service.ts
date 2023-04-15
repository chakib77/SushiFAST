import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Box } from '../box';

@Injectable({
  providedIn: 'root'
})
export class SushiBoxService {

  constructor(private http: HttpClient) { }
  
  getBoxes() {
    return this.http.get('http://localhost:8080/api/boxes');
  }

  getBoxById(id: number): Observable<Box> {
    return this.http.get<Box>('http://localhost:8080/api/boxes/' + id);
  }
  
}
