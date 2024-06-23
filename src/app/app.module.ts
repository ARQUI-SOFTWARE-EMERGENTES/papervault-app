import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UploadComponent } from './pages/upload/upload.component';
import { MyResearchComponent } from './pages/my-research/my-research.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/services/auth/auth.service';
import { ProfileService } from 'src/services/profile/profile.service';
import { ResearchService } from 'src/services/research/research.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    ProfileComponent,
    MyResearchComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    ProfileService,
    ResearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
