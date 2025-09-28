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
      date: 'May 31, 2025',
      title: 'The Analysts Toolkit: Statistics, STorytelling and Strategy',
      description: 'Introduction to Data Analysis',
      link: 'https://fathom.video/share/yhScs19m3q5sumoeuF6TvU7KCmb9n2FS',
      image: 'assets/images/umarMahmoud.JPG'

    },
    {
      date: 'June 21, 2025',
      title: 'Solution Architecture',
      description: 'Introduction to Solution Architecture',
      link: 'https://fathom.video/share/ibFApVWYCZSWxkUfRBFHN5odVTPHTfxZ',
      image: 'assets/images/roosevelt.jpg'
    },
    {
      date: 'June 28, 2025',
      title: 'From Post to Paycheck',
      description: 'Introduction to Branding',
      link: 'https://fathom.video/share/JQekJHJCDDwHPtVA2oJhgH1u4Xy62Wsg',
      image: 'assets/images/wisdom.JPG'
    },
    {
      date: 'July 5, 2025',
      title: 'Introduction to Business/Tech Sales',
      description: 'Business/Tech Sales',
      link: 'https://fathom.video/share/smwBbuKzvo_xR4CYz72zzxvMw-6Pu1Gz',
      image: 'assets/images/lauretta.JPG'
    },
    {
      date: 'July 12, 2025',
      title: 'Introduction to AI Automation',
      description: 'AI Automation',
      link: 'https://fathom.video/share/XHwSZ3N5yzy92AyZzvzYY64SNSVhXAgs',
      image: 'assets/images/malik-automation.JPG'
    },
    {
      date: 'July 19, 2025',
      title: 'Understanding the Business of Technology',
      description: 'Sales in Tech',
      link: 'https://fathom.video/share/3-QzP_ePry3AtQeyudYb4oCTm-p5onaC',
      image: 'assets/images/usman_bala.JPG'
    },
    {
      date: 'August 2, 2025',
      title: 'My Journey to $35m in revenue working with a Fintech',
      description: 'AI Automation',
      link: 'https://fathom.video/share/yimVpk_e1sBVCQekRJ7CZ1wjr7yvLP5p',
      image: 'assets/images/sadiq.JPG'
    },
    {
      date: 'August 2, 2025',
      title: 'My Journey to $35m in revenue working with a Fintech (Continued..)',
      description: 'AI Automation',
      link: 'https://fathom.video/share/1tTrxhKToDWZPXs4GvCzwBk_xE9YYyEe',
      image: 'assets/images/sadiq.JPG'
    },
    {
      date: 'August 23, 2025',
      title: 'Breaking into customer Success',
      description: 'A beginner Guide for Tech Enthusiasts',
      link: 'https://fathom.video/share/Xk2aJDG6LoCwobPDFXqPwMPXMVtPeskA',
      image: 'assets/images/blessing.JPG'
    },
    {
      date: 'September 6, 2025',
      title: 'Breaking into Tech with Design',
      description: 'A beginner Guide for Designers',
      link: 'https://fathom.video/share/95CjP7_G5bPZx-vmbN3xY_SswJEDoE95',
      image: 'assets/images/phillip.jpg'
    },
    {
      date: 'September 27, 2025',
      title: 'Finance in Tech 101',
      description: 'A beginner Guide for Accountants in Tech',
      link: 'https://fathom.video/share/LYjdT8z5HD9apy6zrguiSmJF9DLW5ipF',
      image: 'assets/images/amos.JPG'
    }
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
