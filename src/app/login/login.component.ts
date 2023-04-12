import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myimage:string ="assets/images/exsea.png";

  // login group
  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })
 
constructor(private fb:FormBuilder,private api:ApiService,private route:Router){

}
  
    login(){
      if(this.loginForm.valid){
      let email = this.loginForm.value.email
      let pswd = this.loginForm.value.pswd
      // login api call
      this.api.login(email,pswd)
      .subscribe(
        // success
        (result:any)=>{
        alert(result.message)
        // navigate login
        this.route.navigateByUrl('/home')
      },
      // client
      (result:any)=>{
        alert(result.error.message)
      }
      )

      }
      else{
        alert('invalid form')
      }
      
    }

}



