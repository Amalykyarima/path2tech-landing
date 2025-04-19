import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-explore-communities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './explore-communities.component.html',
  styleUrl: './explore-communities.component.scss'
})
export class ExploreCommunitiesComponent {
  communities = [
    {
      name: 'Abuja Community',
      image: 'assets/communities/abuja.jpg',
      description: 'Tech enthusiasts, students, and professionals in the capital city.',
    },
    {
      name: 'Kaduna Community',
      image: 'assets/communities/kaduna.jpg',
      description: 'Building digital skills and projects across Northern Nigeria.',
    },
    {
      name: 'Niger State Community',
      image: 'assets/communities/niger.jpg',
      description: 'Collaborative learning and mentorship in Minna, Bida & beyond.',
    }
  ];
  selectedCommunity: string | null = null;

  openJoinForm(communityName: string) {
    this.selectedCommunity = communityName;
    setTimeout(() => {
      const formSection = document.getElementById('joinFormSection');
      formSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  submitForm(form: any) {
    if (form.valid) {
      console.log('Form submitted:', form.value);
      alert(`Thanks for joining ${this.selectedCommunity}!`);
      this.selectedCommunity = null;
      form.reset();
    }
  }

  cancel() {
    this.selectedCommunity = null;
  }


}

