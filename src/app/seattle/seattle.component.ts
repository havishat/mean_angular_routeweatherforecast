import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  weather;
  bool = false
    constructor(private _weatherService: WeatherService) { 
      this._weatherService.retrieveTasks("seattle", (a) => {
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
