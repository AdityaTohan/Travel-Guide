import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
      private httpClient : HttpClient
      
  ) { }

  travelApi(place: string) : any {
      return this.httpClient.get("http://api.opentripmap.com/0.1/en/places/geoname?apikey=5ae2e3f221c38a28845f05b64df2f2c33fd3e7fd4b0ad01ef7ebabb6", {
        params : {
          name : place
        }
      })
  }
}
