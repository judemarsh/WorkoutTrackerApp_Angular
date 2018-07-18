import { environment } from "../environments/environment";

export class AppSettings {

    public static CATEGORY_SERVICE_BASE_URL : string = 'http://'+environment.serverHost+':'+environment.serverPort+'/workouttracker/categories';

    public static WORKOUT_SERVICE_BASE_URL : string = 'http://'+environment.serverHost+':'+environment.serverPort+'/workouttracker/workouts';

    public static WORKOUT_ACTIVITY_SERVICE_BASE_URL : string = 'http://'+environment.serverHost+':'+environment.serverPort+'/workouttracker/workoutactivities';

    public static REPORT_SERVICE_BASE_URL : string = 'http://'+environment.serverHost+':'+environment.serverPort+'/workouttracker/report';
}
