import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [ CommonModule,
    MatIconModule,
    MatCardModule],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss'
})
export class ProgramsComponent {
  programs$!: Observable<any[]>; // Proper type declaration

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.programs$ = this.dataService.getMetrics(); // Now returns Observable
  }
}
