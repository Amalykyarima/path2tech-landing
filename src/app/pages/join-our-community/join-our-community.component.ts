import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-join-our-community',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
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

  onSubmit(): void {
    if (this.joinForm.invalid) return;

    this.isSubmitting = true;

    // Simulate form submission to Formspree via fetch or HttpClient
    fetch('https://formspree.io/f/movdjvay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.joinForm.value)
    })
    .then(response => {
      if (response.ok) {
        this.formSubmitted = true;
        this.joinForm.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    })
    .catch(() => alert('Network error'))
    .finally(() => {
      this.isSubmitting = false;
    });
  }

}




