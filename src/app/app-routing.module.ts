import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';
import { UploadComponent } from './pages/upload/upload.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyResearchComponent } from './pages/my-research/my-research.component';
import { ResearchComponent } from './pages/research/research.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path:'search', component: SearchComponent},
  { path:'upload', component: UploadComponent},
  { path:'profile', component: ProfileComponent},
  { path: 'research/:id', component: ResearchComponent },
  { path: 'my-research', component: MyResearchComponent },
  { path: '**', redirectTo: 'search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
