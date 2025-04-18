import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'donate',
    loadComponent: () => import('./pages/donate/donate.component').then(m => m.DonateComponent)
  },
  {
    path: 'programs',
    loadComponent: () => import('./pages/programs/programs.component').then(m => m.ProgramsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'impact',
    loadComponent: () => import('./pages/impact/impact.component').then(m => m.ImpactComponent)
  },
  {
    path: 'communities',
    loadComponent: () => import('./pages/communities/communities.component').then(m => m.CommunitiesComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'events',
    loadComponent: () => import('./pages/events/events.component').then(m => m.EventsComponent)
  },
  {
    path: 'join-our-community',
    loadComponent: () => import('./pages/join-our-community/join-our-community.component').then(m => m.JoinOurCommunityComponent)
  },
  {
    path: 'explore-communities',
    loadComponent: () => import('./pages/explore-communities/explore-communities.component').then(m => m.ExploreCommunitiesComponent)
  },
  // Add other routes
];
