import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
lat: any;
lon:any;
weather:any;

constructor(private weatherService : WeatherService) { }

  ngOnInit(): void {
this.getLocation();

    //this.weatherService.getWeatherDataByCoords(35,139).subscribe(console.log)
  }

  getLocation()
  {
    if("geolocation" in navigator)
    {
       navigator.geolocation.watchPosition(success=>{
         this.lat=success.coords.latitude;
         this.lon=success.coords.longitude;

         this.weatherService.getWeatherDataByCoords(this.lat,this.lon).subscribe(data=>{
           this.weather=data;
         });
       })
    }
  }

  getCity(city:any)
  {
    this.weatherService.getWeatherDateByCityName(city).subscribe(data=>{
      this.weather=data;
    });
  }

}


