import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
// import { trigger, transition, style, animate, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  // animations: [
  //   trigger('navLinkAnimation', [
  //     transition('* => *', [
  //       query('a, button', [
  //         style({ opacity: 0, transform: 'translateX(50px)' }),
  //         stagger(100, [
  //           animate('0.5s ease', style({ opacity: 1, transform: 'translateX(0)' }))
  //         ])
  //       ], { optional: true })
  //     ])
  //   ])
  // ]
})
export class HeaderComponent {
  logoPath: string = 'assets/images/pathtotech.png'; // Set the path to your logo
  isMenuOpen = false;
  // logoPath = 'path/to/your/logo.png';

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevent scrolling when menu is open
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  // Close menu when clicking outside or pressing ESC
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-links') && !target.closest('.burger') && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  @HostListener('document:keydown.escape')
  onKeydownHandler() {
    if (this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
