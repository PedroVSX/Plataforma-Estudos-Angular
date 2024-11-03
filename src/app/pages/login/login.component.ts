import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar-footer/navbar/navbar.component';
import { FooterComponent } from '../../components/navbar-footer/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {}

  redirectToOtherPage(path: string) {
    this.router.navigate([path]);
  }

}
