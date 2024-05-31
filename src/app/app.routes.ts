import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { UploadComponent } from './upload/upload.component';
import { ProfileComponent } from './profile/profile.component';
import { ResearchComponent } from './research/research.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path:'search', component: SearchComponent},
    { path:'upload', component: UploadComponent},
    { path:'profile/:id', component: ProfileComponent},
    { path: 'research/:id', component: ResearchComponent },
    { path: '**', redirectTo: 'search'}
];
