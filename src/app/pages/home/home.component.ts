import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar-footer/navbar/navbar.component';
import { FooterComponent } from '../../components/navbar-footer/footer/footer.component';
import { TopicCardComponent } from '../../components/cards/topic-card/topic-card.component';
import { TopicSliderComponent } from '../../components/sliders/topic-slider/topic-slider.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, CommonModule, NavbarComponent, FooterComponent, TopicCardComponent, TopicSliderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}

  redirectToOtherPage(path: string) {
    this.router.navigate([path]);
  }

  
  
}
