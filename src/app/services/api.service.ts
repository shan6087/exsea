import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //register
  register(name:any,email:any,pswd:any){
    const body={
      name,
      email,
      pswd
    }
    // server call to register an account and return response to register component
    return this.http.post('http://localhost:3000/register',body)

  } 
  
  // booking
  booking( itin:any,dur:any,dep:any,gst:any,ctype:any,crs:any,fname:any,lname:any,add:any,email:any,phone:any){
    const body={
      itin,
      dur,
      dep,
      gst,
      ctype,
      crs,
      fname,
      lname,
      add,
      email,
      phone

    }
    // server call 
  return this.http.post('http://localhost:3000/booknow',body)
  }

  



  // login
  login(email:any,pswd:any){
    const body = {
      email,
      pswd
    }
     // server call to login an account and return response to login component
     return this.http.post('http://localhost:3000',body)

  }

  // get itinerary,duration,ship
  getData(){
    return this.http.get('http://localhost:3000/booknow')
  }

  //for cruises api
  getAllcruises(){
    return this.http.get('http://localhost:3000/cruises')
  }

  // all packages api for holiday

  getAllPackages(){
  return this.http.get('http://localhost:3000/holiday')
  }
  
  // getdata api for book now
getBookings(){
  return this.http.get('http://localhost:3000/booknow')
} 
}
