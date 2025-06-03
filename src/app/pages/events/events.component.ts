import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {

  events = [
    {
      date: 'May 10, 2025',
      title: 'From Zero to Software Developer',
      description: 'A webinar Designed to guide beginners through the process of becoming a Software Developer',
      link: 'https://fathom.video/share/ARmn3Z2-wx-JbxkpxYupZ5ya7z4_2ajj',
      image: 'assets/images/malik.JPG'

    },
    {
      date: 'May 24, 2025',
      title: 'Launch your career in product design',
      description: 'Webinar Designed to guide beginners through the process of becoming a Product Designers',
      link: 'https://fathom.video/share/13Sy8Wnqhe7DzTJGfHaYZasimd9JyPc4',
      image: 'assets/images/seyi.JPG'

    },
    {
      date: 'Jan 21, 2025',
      title: 'The Analysts Toolkit: Statistics, STorytelling and Strategy',
      description: 'Introduction to Data Analysis',
      link: 'https://fathom.video/share/yhScs19m3q5sumoeuF6TvU7KCmb9n2FS',
      image: 'assets/images/umarMahmoud.JPG'

    },



  ];


  scrollToBottom(): void {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  goToEvent(event: any): void {
    window.open(event.link, '_blank');
  }

  goToRegister() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSc0dyPEzwL__axbVrk3Ys7jPYuUROmN5xMUGDqwKKuLz8uldg/viewform')
  }

}
