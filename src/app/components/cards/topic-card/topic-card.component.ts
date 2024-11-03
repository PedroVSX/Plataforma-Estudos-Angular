import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-card',
  standalone: true,
  imports: [],
  templateUrl: './topic-card.component.html',
  styleUrl: './topic-card.component.scss'
})
export class TopicCardComponent {

  constructor(private router: Router) {}

  redirectToOtherPage(path: string) {
    this.router.navigate([path]);
  }
  
}
