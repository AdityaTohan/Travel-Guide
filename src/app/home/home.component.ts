import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../shared/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  country : string = ""
  lat : any
  lon : any
  searchForm = new FormControl("")
  constructor(
    private apiService : ApiService
  ) { }
 
  ngOnInit(): void {}

  Search():any {
    this.apiService.travelApi(this.searchForm.value,).subscribe(response => {
      console.log(response)
      this.country = response.country
      this.lat = response.lat
      this.lon = response.lon
    })
  }

  Places():any {
    this.apiService.placesApi(this.lat.value).subscribe(response =>{
      console.log(response)
    })
  }


}
