import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // login group
  registerForm = this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required,Validators.email]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })
    
  constructor(private fb:FormBuilder,private api:ApiService,private router:Router ){

  }
    
      login(){
        if(this.registerForm.valid){
        let email = this.registerForm.value.email
        let pswd = this.registerForm.value.pswd
        let name = this.registerForm.value.name
        this.api.register(name,email,pswd)
        .subscribe(
          // success
          (result:any)=>{
          alert(result.message)
          // navigate login
          this.router.navigateByUrl('')
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
