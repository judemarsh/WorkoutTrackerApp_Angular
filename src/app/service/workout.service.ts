import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from  '@angular/common/http';
import { AppSettings } from '../app-settings';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { Workout } from '../model/workout';
import { WorkoutActive } from '../model/workout-active';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  workoutList: Workout[];

  constructor(private httpClient: HttpClient) {
    this.workoutList = [];
   }

  public getWorkoutList() : Observable<any> {
    return this.httpClient.get<Workout[]>(AppSettings.WORKOUT_SERVICE_BASE_URL + '/');
  }

  public getWorkoutById(workoutId: number) : Observable<Workout>{
    return this.httpClient.get<Workout>(AppSettings.WORKOUT_SERVICE_BASE_URL + '/' + workoutId);
  }

 
  public saveWorkout(workoutObj: Workout) : Observable<number>{
    /*let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });*/
    return this.httpClient.post<number>(AppSettings.WORKOUT_SERVICE_BASE_URL + '/', workoutObj);
  }

  public updateWorkout(workoutObj: Workout) : Observable<number>{
    /*let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });*/
    return this.httpClient.put<number>(AppSettings.WORKOUT_SERVICE_BASE_URL + '/', workoutObj);
  }

  public deleteWorkout(workoutId: number) : Observable<boolean>{
    /*let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });*/
    return this.httpClient.delete<boolean>(AppSettings.WORKOUT_SERVICE_BASE_URL + '/' +workoutId);
  }
}
