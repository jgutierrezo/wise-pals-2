import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './home/home.component';
// import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
// import { AuthComponent } from './service/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { TutorStatisticsComponent } from './tutor-statistics/tutor-statistics.component';
import { NgChartsModule } from 'ng2-charts';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TutorListComponent } from './tutor-list/tutor-list.component';
import { RegisterTutorComponent } from './register-tutor/register-tutor.component';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    TutorStatisticsComponent,
    SearchBarComponent,
    TutorListComponent,
    RegisterTutorComponent,
    TutorProfileComponent,
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    MatChipsModule,
    MatIconModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }