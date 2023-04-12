import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {

    // booking group
    bookingForm = this.fb.group({
      itin:[''],
      dur:[''],
      dep:[''],
      gst:[''],
      ctype:[''],
      crs:[''],
      fname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      lname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      add:['',[Validators.required,]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.pattern('[0-9]*')]]
    })

  bookings:any=[]

  constructor(private api:ApiService,private fb:FormBuilder,private router:Router ){

  }
  
ngOnInit(): void {
  this.api.getBookings()
  .subscribe((result:any)=>{
    this.bookings = result.bookings
    console.log(this.bookings);

  })
}

bookNow(){
  
  if(this.bookingForm.valid){
    let itin  = this.bookingForm.value.itin
    let dur = this.bookingForm.value. dur
    let dep = this.bookingForm.value.dep
    let gst = this.bookingForm.value.gst
    let ctype = this.bookingForm.value.ctype
    let crs = this.bookingForm.value.crs
    let fname = this.bookingForm.value.fname
    let lname = this.bookingForm.value.lname
    let add = this.bookingForm.value.add
    let email = this.bookingForm.value.email
    let phone = this.bookingForm.value.phone
    
    this.api.booking( itin,dur,dep, gst,ctype,crs,fname,lname,add,email,phone)
      .subscribe(
        // success
        (result:any)=>{
        alert(result.message)
        // navigate login
        this.router.navigateByUrl('/success')
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

