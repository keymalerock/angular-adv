import { Component, Input, OnChanges} from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnChanges {

  @Input() titulo: String = 'Sin Titulo';
  @Input('data') data1: number[] = [35, 45, 70];  
  @Input('labels') doughnutChartLabels: String[] = [ 'label1', 'label2','label3' ];

  
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 50, 100, 150 ],
        backgroundColor: ['#6857E6','#009FEE','#F02059']
      },
      { data: [ 50, 250, 200 ],
        backgroundColor: ['#9E120E','#FF5800','#FFB414']
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  ngOnChanges(){
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [{ data: this.data1,
                   backgroundColor: ['#9E120E','#FF5800','#FFB414']
                 },
                 { data: [1 ,2,3]}
      ],
    };
  }

}
