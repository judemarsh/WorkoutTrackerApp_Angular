import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from  '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../app-settings';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private httpClient: HttpClient) { }

  public getWorkoutReport() : Observable<any> {
    return this.httpClient.get<any>(AppSettings.REPORT_SERVICE_BASE_URL + '/');
  }
}
