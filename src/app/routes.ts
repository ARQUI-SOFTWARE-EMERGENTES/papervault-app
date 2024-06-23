import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path:'search', component: SearchComponent},
  { path: 'upload', component: UploadComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'research/:id', component: SearchComponent },
  { path: 'my-research', component: MyResearchComponent },
  { path: '**', redirectTo: 'search' }
];
