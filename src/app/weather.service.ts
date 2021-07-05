import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url='https://api.openweathermap.org/data/2.5/weather';
 
  constructor(private http : HttpClient) { }

  apiKey='4dc69800bcaace33208acc08f8437417';

  getWeatherDataByCoords(lat: any, lon:any)
  {
    let params=new HttpParams()
    .set('lat',lat)
    .set('lon',lon)
    .set('units','imperial')
    .set('appid',this.apiKey)

    return this.http.get(this.url,{params});
  }

  getWeatherDateByCityName(city:string)
  {
    let params=new HttpParams()
    .set('q',city)
    .set('units','imperial')
    .set('appid', this.apiKey)

    return this.http.get(this.url, { params});
  }


}
