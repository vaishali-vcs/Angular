import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';

import {FormsModule} from '@angular/forms';
import { EInfoComponent } from './e-info/e-info.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { IntroComponent } from './Component/intro/intro.component';
import { CoursesComponent } from './Component/courses/courses.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagecomponentComponent,
    EInfoComponent,
    NavbarComponent,
    IntroComponent,
    CoursesComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
