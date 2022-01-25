import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  titulo1: String ='Ventas';

  labels1: String[] = ['lamezda','delufo','nonono'];

  data1: number[] = [1,10,89];

  /*public data1!: ChartData<"doughnut", number[], unknown>'

   ChartData<"doughnut", number[], unknown>'.ngtsc(2741)*/

/*   public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales','mail orders' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 600 ],
        backgroundColor: ['#6857E6','#009FEE','#F02059']
      },
      { data: [ 50, 250, 200 ],
        backgroundColor: ['#9E120E','#FF5800','#FFB414']
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut'; */


}
