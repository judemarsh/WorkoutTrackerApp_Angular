import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../service/report.service';
import { Report } from '../../model/report';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  public reportObj: Report = new Report(null,null,null,null,null,null);

  width = 600;
  height = 400;
  type = 'column2d';
  dataFormat = 'json';
  caloriesWeekChartData = {};
  caloriesMonthChartData = {};
  caloriesYearChartData = {};

  constructor(private reportService: ReportService) {
   }

  ngOnInit() {
    this.reportService.getWorkoutReport().subscribe(responseData => {
      this.reportObj.workoutTimeOfDay = responseData.workoutTimeOfDay;
      this.reportObj.workoutTimeOfWeek = responseData.workoutTimeOfWeek;
      this.reportObj.workoutTimeOfMonth = responseData.workoutTimeOfMonth;
      this.reportObj.totalCaloriesInWeek = responseData.totalCaloriesInWeek;
      this.reportObj.totalCaloriesInMonth = responseData.totalCaloriesInMonth;
      this.reportObj.totalCaloriesInYear = responseData.totalCaloriesInYear;
      //this.reportObj.caloriesWeekChart = responseData.caloriesWeekChart;
      //this.reportObj.caloriesMonthChart = responseData.caloriesMonthChart;
      //this.reportObj.caloriesYearChart = responseData.caloriesYearChart;
      this.caloriesWeekChartData = {
        chart: {
          caption: "Calories burnt - Week report",
          subCaption: "The amount of calories burnt by working out during the current week.",
          numberPrefix: "",
          theme: "fint"
        },
        data: responseData.caloriesWeekChart
      };
      this.caloriesMonthChartData = {
        chart: {
          caption: "Calories burnt - Month report",
          subCaption: "The amount of calories burnt by working out during the current month.",
          numberPrefix: "",
          theme: "fint"
        },
        data: responseData.caloriesMonthChart
      };
      this.caloriesYearChartData = {
        chart: {
          caption: "Calories burnt - Year report",
          subCaption: "The amount of calories burnt by working out during the current year.",
          numberPrefix: "",
          theme: "fint"
        },
        data: responseData.caloriesYearChart
      };
    });
  }

}
