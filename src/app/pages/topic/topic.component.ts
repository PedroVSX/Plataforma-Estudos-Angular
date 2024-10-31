import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TopicContainerComponent } from '../../components/topic-container/topic-container.component';
import { CommentContainerComponent } from '../../components/comment-container/comment-container.component';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [NavbarComponent, TopicContainerComponent, CommentContainerComponent],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.scss'
})
export class TopicComponent {

}
