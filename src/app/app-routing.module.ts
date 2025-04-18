import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateComponent } from './pages/donate/donate.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ImpactComponent } from './pages/impact/impact.component';
import { HomeComponent } from './home/home.component'; // Rename your main component if needed

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'impact', component: ImpactComponent },
  { path: '**', redirectTo: '' } // Handle 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
