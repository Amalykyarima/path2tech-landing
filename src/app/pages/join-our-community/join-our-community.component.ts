import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-join-our-community',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './join-our-community.component.html',
  styleUrl: './join-our-community.component.scss'
})

export class JoinOurCommunityComponent {
  joinForm: FormGroup;
  isSubmitting = false;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.joinForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      careerStage: ['', Validators.required],
      interest: ['', Validators.required],
      goals: ['']
    });
  }

  onSubmit() {
    if (this.joinForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    const formUrl = 'https://formspree.io/f/movdjvay';

    const formData = new FormData();
    formData.append('fullname', this.joinForm.value.fullname);
    formData.append('email', this.joinForm.value.email);
    formData.append('careerStage', this.joinForm.value.careerStage);
    formData.append('interest', this.joinForm.value.interest);
    formData.append('goals', this.joinForm.value.goals);

    this.http.post(formUrl, formData, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    }).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.formSubmitted = true;
        this.joinForm.reset();
      },
      error: () => {
        this.isSubmitting = false;
        alert('Something went wrong. Please try again.');
      }
    });
  }
}




