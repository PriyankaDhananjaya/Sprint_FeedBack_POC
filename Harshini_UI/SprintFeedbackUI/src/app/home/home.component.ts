import { Component, OnInit,ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_stock from 'highcharts/modules/stock';
import Exporting from 'highcharts/modules/exporting';
import {MatPaginator} from '@angular/material/paginator';
import { UserDataService } from '../Service/user-data.service';
import { feedback } from '../Models/Data.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

 
export class HomeComponent implements OnInit {  

  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  chartOptions: {};
  searchKey : string;
  feedbackData : feedback[];
  Highcharts = Highcharts;
  displayedColumns: string[] = ["userName","internName","problemSolving","technicalExcellence","projectDelivery",
  "projectProcessCompilance","teaming","discipline","communication","overallTechnicalCompitency"];

  dataSource = new MatTableDataSource<feedback>();

  constructor(private _userDataService : UserDataService) { }
  ngOnInit() {
    this._userDataService.getFeedback().subscribe(interns => {this.dataSource.data = interns});
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
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
    Exporting(Highcharts);
    

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
        );
    }, 300);

  
  }

  onSearchClear(){
    this.searchKey = ""; 
    this.applyFilter();
     }
  applyFilter(){
    this.dataSource.filter = this.searchKey.toLowerCase().trim();
     }
}


