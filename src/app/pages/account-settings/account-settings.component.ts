import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar-footer/navbar/navbar.component';
import { FooterComponent } from '../../components/navbar-footer/footer/footer.component';
import { ProfileSettingsComponent } from '../../components/account/profile-settings/profile-settings.component';
import { GeneralSettingsComponent } from '../../components/account/general-settings/general-settings.component';
import { PersonalDataSettingsComponent } from '../../components/account/personal-data-settings/personal-data-settings.component';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ProfileSettingsComponent, GeneralSettingsComponent, PersonalDataSettingsComponent],
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.scss'
})
export class AccountSettingsComponent {

}
