import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private openTripMapApiKey = environment.openTripMapApiKey

  constructor(
    private httpClient : HttpClient
  ) {}

  openTrip_geoname(userSearch: string): any {
    return this.httpClient.get(environment.openTripMapServer + "places/geoname", {
      params: {
        apikey: this.openTripMapApiKey,
        name: userSearch
      }
    })
  }

  openTrip_radius(lat: string, lon: string): any {
    return this.httpClient.get(environment.openTripMapServer + 'places/radius', {
      params: {
        apikey: this.openTripMapApiKey,
        radius: '1000',
        // limit: '5',
        offset: '0',
        lon: lon,
        lat: lat,
        rate: '2',
        format: 'json'
      }
    })
  }

  openTrip_xid(placeId: string): any {
    return this.httpClient.get(environment.openTripMapServer + 'places/xid/' + placeId, {
      params: {
        apikey: this.openTripMapApiKey
      }
    })
  }
}
