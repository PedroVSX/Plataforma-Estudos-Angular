import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TopicCardComponent } from '../../components/topic-card/topic-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [NavbarComponent, TopicCardComponent],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})
export class GroupComponent {

  constructor(private router: Router) {}

  redirectToOtherPage(path: string) {
    this.router.navigate([path]);
  }

}
