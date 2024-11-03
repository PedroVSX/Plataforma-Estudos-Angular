import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar-footer/navbar/navbar.component';

@Component({
  selector: 'app-my-groups',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './my-groups.component.html',
  styleUrl: './my-groups.component.scss'
})
export class MyGroupsComponent {

}
