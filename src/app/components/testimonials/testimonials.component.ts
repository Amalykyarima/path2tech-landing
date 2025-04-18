import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-testimonials',

  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials$!: Observable<any[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.testimonials$ = this.dataService.getTestimonials();
  }
}
