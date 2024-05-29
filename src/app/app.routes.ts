import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { UploadComponent } from './upload/upload.component';
import { UploadSuccesfullyComponent } from './upload-succesfully/upload-succesfully.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path:'search', component: SearchComponent},
    { path:'upload', component: UploadComponent},
    { path:'upload-succesfully', component: UploadSuccesfullyComponent},
    { path:'profile/:id', component: ProfileComponent}
];
