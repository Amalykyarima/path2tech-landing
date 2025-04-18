import { Component } from '@angular/core';
// import { HeroModule } from "../components/hero/hero.module";
// import { MetricsModule } from "../components/metrics/metrics.module";
// import { ProgramsModule } from "../components/programs/programs.module";
import { TestimonialsModule } from "../components/testimonials/testimonials.module";
import { CommonModule } from '@angular/common';
import { HeroComponent } from "../components/hero/hero.component";
import { MetricsComponent } from "../components/metrics/metrics.component";
import { ProgramsComponent } from "../components/programs/programs.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TestimonialsModule, HeroComponent, MetricsComponent, ProgramsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  amountRaised: number = 125000;
  fundingGoal: number = 250000;


  get donationProgress(): number {
    return (this.amountRaised / this.fundingGoal) * 100;
  }

}
