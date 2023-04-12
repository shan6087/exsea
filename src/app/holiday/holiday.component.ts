import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit  {

packages:any=[]

constructor(private api:ApiService){

}

ngOnInit(): void {
  this.api.getAllPackages()
  .subscribe((result:any)=>{
    this.packages = result.packages
    console.log(this.packages);

  })
}

}
