import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TestimonialsModule } from "./components/testimonials/testimonials.module";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from "./components/footer/footer.component";
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TestimonialsModule, MatIconModule, MatCardModule, FooterComponent,
   RouterModule,
    ],
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'path2tech-landing';
  amountRaised: number = 125000;
  fundingGoal: number = 250000;


  // Example update method
  updateDonation(amount: number) {
    this.amountRaised += amount;
    // Add API call here to persist to backend
  }

  // Calculate progress percentage
  get donationProgress(): number {
    return (this.amountRaised / this.fundingGoal) * 100;
  }

  // Handle donation button click
  onDonateClick() {
    // Implement your donation logic here
    console.log('Redirect to donation platform');
  }
}
