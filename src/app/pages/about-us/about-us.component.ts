import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  team = [
    {
      name: 'Abdulmalik Masud',
      title: 'Founder & Visionary Lead',
      image: 'assets/team/founder.jpg'
    },
    {
      name: 'Usman Bala',
      title: 'Co-Founder & Program Director',
      image: 'assets/team/co-founder.jpg'
    },
    {
      name: 'Ayansola S.G Ayodeji',
      title: 'Product Designer',
      image: 'assets/team/seyi.jpg'
    },
    {
      name: 'Abdulmalik Obansa',
      title: 'Volunteer — Content & Events',
      image: 'assets/team/obansa.jpg'
    }
  ];
}
