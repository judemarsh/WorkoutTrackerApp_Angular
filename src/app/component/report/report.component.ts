import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../service/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  id = 'chart1';
  width = 600;
  height = 400;
  type = 'column2d';
  dataFormat = 'json';
  dataSource;

  data: any;

  constructor(private reportService: ReportService) {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: '',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [63, 58, 82, 81, 56, 55, 41]
          },
          {
              label: '',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [27, 49, 45, 19, 87, 28, 90]
          }
      ]
  }
   }

  ngOnInit() {
    this.reportService.getWorkoutReport().subscribe(responseData => {

    });
  }

}
