import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../sharedServices/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  searchForm = new FormControl("")
  responseData: any = null

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {}

  Search():any {
    this.apiService.openTrip_geoname(this.searchForm.value).subscribe(response => {
      this.apiService.openTrip_radius(response.lat, response.lon).subscribe(response => {
        this.responseData = response
      })
    })
  }
}
