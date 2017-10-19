import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  weather;
  bool = false;
  
  
    constructor(private _weatherService: WeatherService) { 
      this._weatherService.retrieveTasks("chicago", (a) => {
        this.weather = a;
        this.bool = true;
        console.log(this.weather)
        console.log(this.weather.main.humidity)
      })
    }

  ngOnInit() {
  }

}
