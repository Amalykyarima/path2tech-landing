import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './components/header/header.component';
// import { HeroComponent } from './components/hero/hero.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    HomeComponent,
    BrowserModule
  ]
})
export class AppModule { }
