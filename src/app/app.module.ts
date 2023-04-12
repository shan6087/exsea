import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule,} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HolidayComponent } from './holiday/holiday.component';
import { CruisesComponent } from './cruises/cruises.component';
import { BooknowComponent } from './booknow/booknow.component';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './success/success.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HolidayComponent,
    CruisesComponent,
    BooknowComponent,
    SuccessComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
   
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
