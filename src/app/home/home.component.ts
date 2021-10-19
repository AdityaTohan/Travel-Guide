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
  searchForm = new FormControl("")
  constructor(
    private apiService : ApiService
  ) { }

  ngOnInit(): void {
    
  }
  abc():any {
    this.apiService.travelApi(this.searchForm.value).subscribe(response => {
      console.log(response)
    })
  }

}
