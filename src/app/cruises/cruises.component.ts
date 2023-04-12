import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cruises',
  templateUrl: './cruises.component.html',
  styleUrls: ['./cruises.component.css']
})
export class CruisesComponent implements OnInit {

  cruises:any=[]

constructor(private api:ApiService){

}

ngOnInit(): void {
  this.api.getAllcruises()
  .subscribe((result:any)=>{
    this.cruises = result.cruises
    console.log(this.cruises);

  })
}


}
