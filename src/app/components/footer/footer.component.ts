import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  linkedInLink: string = 'https://www.linkedin.com/company/pathtotechng/?fbclid=PAZXh0bgNhZW0CMTEAAaft32FBdkLYtYFIhN_mTbYWQlnFOMhyJIm_JVVVUXEeFvWszgmjzVONj2aLZQ_aem_vUZlqwu-Ax2fTWa5ETVK1g'
  InstagramLink: string = 'https://www.instagram.com/pathtotechng?igsh=MXhncWFldzZyejNvNA=='
}
