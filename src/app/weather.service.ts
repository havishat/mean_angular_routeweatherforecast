import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {

  weather = []
  city 
  constructor(private _http: Http) { }
    retrieveTasks(id, callback) {
      this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${id}&APPID=d8a60ea6d2a73bb772d4fc9292b10fe8&units=metric`).subscribe( 
        (response)=> { 
          this.weather = response.json();
          callback(this.weather);
        }, 
        (error)=> { console.log(error); }
      );
    }
}
