import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path:'search', component: SearchComponent}
];
