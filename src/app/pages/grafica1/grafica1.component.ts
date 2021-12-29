import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component implements OnInit {
  public labels: string[] = [
    'Dark Souls 3',
    'Age of Empires 3 ',
    'Call of Duty',
  ];

  public dataSets: number[] = [250, 560, 170];

  constructor() {}

  ngOnInit(): void {}
}
