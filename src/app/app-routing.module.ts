import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooknowComponent } from './booknow/booknow.component';
import { CruisesComponent } from './cruises/cruises.component';
import { HolidayComponent } from './holiday/holiday.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component'
import { SuccessComponent } from './success/success.component';


const routes: Routes = [
  
  {path:'',component:LoginComponent},

  {path:'home',component:HomeComponent},
  
  {path:'register',component:RegisterComponent},

  {path:'holiday',component:HolidayComponent},

  {path:'cruises',component:CruisesComponent},

  {path:'booknow',component:BooknowComponent},

  {path:'success',component:SuccessComponent}


  

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

