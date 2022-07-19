import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

  public doughnutChartLabels: Label[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other Sales'];
  public doughnutChartData: MultiDataSet = [
    [ 350, 450, 100, 150 ]
  ];

  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    { 
      backgroundColor: [
        '#59B8FF',
        '#E04F3F',
        '#B8F752',
        '#5A6FE0',
      ]
    }
  ];

}
