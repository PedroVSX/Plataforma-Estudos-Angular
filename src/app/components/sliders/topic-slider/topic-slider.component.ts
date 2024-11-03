import { Component, ElementRef, ViewChild } from '@angular/core';
import { TopicCardComponent } from '../../cards/topic-card/topic-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topic-slider',
  standalone: true,
  imports: [CommonModule, TopicCardComponent],
  templateUrl: './topic-slider.component.html',
  styleUrl: './topic-slider.component.scss'
})
export class TopicSliderComponent {
  @ViewChild('carousel') carousel!: ElementRef;

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -800, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 800, behavior: 'smooth' });
  }
}
