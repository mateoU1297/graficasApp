import { Component, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent {

  @Input() horizontal: boolean = false;
  @Input() barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  @Input() barChartData: ChartDataSets[] = [
    { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A'},
    { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B'},
    { data: [ 8, 18, 20, 49, 96, 17, 100 ], label: 'Series C'}
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';
  public bartChartLegend = true;

  ngOnInit(): void {
    if(this.horizontal) {
      this.barChartType = 'horizontalBar';
    }
  }

}
