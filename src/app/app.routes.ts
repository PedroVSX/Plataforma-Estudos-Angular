import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { GroupComponent } from './pages/group/group.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { TopicSliderComponent } from './components/topic-slider/topic-slider.component';
import { TopicComponent } from './pages/topic/topic.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'group', component: GroupComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: 'topic', component: TopicComponent}
];
