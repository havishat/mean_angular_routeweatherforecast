import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather
  bool = false;
  constructor(private _weatherService: WeatherService) { 
    this._weatherService.retrieveTasks("Dallas", (a) => {
      this.weather = a
      this.bool = true;
      console.log(this.weather)
      console.log(this.weather.main.humidity)
    })
  }

  ngOnInit() {
  }

}
