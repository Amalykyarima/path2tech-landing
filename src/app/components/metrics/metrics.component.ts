
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [ CommonModule,
    MatIconModule],
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})

export class MetricsComponent implements OnInit {
  metrics$!: Observable<any[]>; // Proper type declaration

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.metrics$ = this.dataService.getMetrics(); // Now returns Observable
  }
}
