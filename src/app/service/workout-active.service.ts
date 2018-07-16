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
export class WorkoutActiveService {

  constructor(private httpClient: HttpClient) { }

  public getWorkoutActive(workoutId: number) : Observable<WorkoutActive>{
    return this.httpClient.get<WorkoutActive>(AppSettings.WORKOUT_ACTIVITY_SERVICE_BASE_URL + '/' + workoutId);
  }

  public startWorkout(workoutActiveObj: WorkoutActive) : Observable<number>{
    /*let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });*/
    return this.httpClient.post<number>(AppSettings.WORKOUT_ACTIVITY_SERVICE_BASE_URL + '/', workoutActiveObj);
  }

  public endWorkout(workoutActiveObj: WorkoutActive) : Observable<number>{
    /*let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });*/
    return this.httpClient.put<number>(AppSettings.WORKOUT_ACTIVITY_SERVICE_BASE_URL + '/', workoutActiveObj);
  }


}
