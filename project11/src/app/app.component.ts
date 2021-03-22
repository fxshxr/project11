import { Component } from '@angular/core';

export interface Indicator {
  status: boolean;
  show: boolean;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  
  export class AppComponent {
    indicators: Indicator[] = [
      { id:1,status: Math.random() >= 0.5, show: true },
      { id:2,status: Math.random() >= 0.5, show: true },
      { id:3,status: Math.random() >= 0.5, show: true },
      { id:4,status: Math.random() >= 0.5, show: true },
      { id:5,status: Math.random() >= 0.5, show: true },
      { id:6,status: Math.random() >= 0.5, show: true },
      { id:7,status: Math.random() >= 0.5, show: true },
      { id:8,status: Math.random() >= 0.5, show: true },
      { id:9,status: Math.random() >= 0.5, show: true },
      { id:10,status: Math.random() >= 0.5, show: true },
    ];
  }
