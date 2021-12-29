import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent implements OnChanges {
  @Input() titulo: string = 'Sin titulo';

  @Input() labels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  @Input() dataSets: number[] = [350, 450, 100];

  public colors: Color[] = ['#6857E6', '#009FEE', '#F02059'];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [{ data: this.dataSets, backgroundColor: this.colors }],
  };

  public doughnutChartType: ChartType = 'doughnut';

  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.doughnutChartData = {
      labels: this.labels,
      datasets: [{ data: this.dataSets, backgroundColor: this.colors }],
    };
  }
}
