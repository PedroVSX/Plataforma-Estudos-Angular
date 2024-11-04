import { Component, NgModule } from '@angular/core';
import { NavbarComponent } from '../../components/navbar-footer/navbar/navbar.component';
import { TopicCardComponent } from '../../components/cards/topic-card/topic-card.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [CommonModule, NavbarComponent, TopicCardComponent],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})
export class GroupComponent {

  constructor(private router: Router) {
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile.bind(this));
  }

  redirectToOtherPage(path: string) {
    this.router.navigate([path]);
  }

  isMobile: boolean = false;
  isPopupOpen: boolean = false;

  checkIfMobile() {
    this.isMobile = window.innerWidth <= 1024;
  }

  toggleRightPopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

}
