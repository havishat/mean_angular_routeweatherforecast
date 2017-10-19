import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather;
  bool = false
  constructor(private _weatherService: WeatherService) { 
    this._weatherService.retrieveTasks("sanjose", (a) => {
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
