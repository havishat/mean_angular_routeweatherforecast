import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {

  weather;
  bool = false
    constructor(private _weatherService: WeatherService) { 
      this._weatherService.retrieveTasks("washington", (a) => {
        this.weather = a
        this.bool = true
        console.log(this.weather)
        console.log(this.weather.main.humidity)
        console.log(this.weather.weather[0].description)
      })
    }

  ngOnInit() {
  }

}
