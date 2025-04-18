import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs'; // Ensure Observable is imported

@Injectable({ providedIn: 'root' })
export class DataService {

  getMetrics(): Observable<any[]> { // Specify return type
    return of([ // Wrap with rxjs of()
      { title: 'Weekly Mentorship', value: '1,000+', icon: 'work' },
      { title: 'Building Communities', value: '50+', icon: 'building' },
      { title: 'Mentorship Forum', value: '$2M+', icon: 'group' }
    ]);
  }

  getPrograms() : Observable<any[]> {
    return of([
      { title: 'Mentorship', icon: 'people', description: '1-on-1 guidance from industry experts' },
      { title: 'Workshops', icon: 'computer', description: 'Hands-on technical training sessions' },
      { title: 'Job Placement', icon: 'business_center', description: 'Career support and opportunities' }
    ]);
  }

  getTestimonials() {
    return of([
      {
        name: 'Malik Masud',
        role: 'Software Engineer',
        text: 'Path2Tech gave me the skills and confidence to transition into tech. The mentorship program was life-changing!',
        photo: 'testimonial.jpg'
      },
      {
        name: 'Usman Bala',
        role: 'Data Analyst',
        text: 'Thanks to the workshops and career support, I landed my dream job in just 6 months.',
        photo: 'testimonial.jpg'
      }
    ]);
  }
}
