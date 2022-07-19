import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  constructor(
    private graficasService: GraficasService
  ) { }

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];

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

  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSociales()
      .subscribe(({labels, values}: any) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      }
    );
  }

}
