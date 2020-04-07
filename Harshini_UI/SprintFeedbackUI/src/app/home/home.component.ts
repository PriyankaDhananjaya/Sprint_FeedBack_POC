import { Component, OnInit,ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_stock from 'highcharts/modules/stock';
import {MatPaginator} from '@angular/material/paginator';
import { UserDataService } from '../Service/user-data.service';
import { intern } from '../Models/Data.model';

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

 
export class HomeComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  chartOptions: {};

  Highcharts = Highcharts;

  displayedColumns: string[] = ['id', 'name', 'college', 'project'];
  
  dataSource = this._userDataService.getInterns().subscribe(interns => this.dataSource = interns);

 

  constructor(private _userDataService : UserDataService) { }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;

    this.chartOptions = {
      chart: {
        type: 'column'
    },
    title: {
        text: 'Sprint based Feedback'
    },
    
    xAxis: {
        categories: [
            'Sprint 1',
            'Sprint 2',
            'Sprint 3',
            'Sprint 4',
            'Sprint 5'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rating'
        }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  credit:{
      enabled : false,
  },
  exporting:{
      enabled : true,
  },
  series: [{
        name: 'Project 1',
        data: [4,2,3,4,2]
    }, {
      name: 'Project 2',
      data: [3,2,4,4,3]
    }, {
      name: 'Project 3',
      data: [4,3,3,4,4]
    }]
  };

    HC_stock(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);

   
  }

  

}


