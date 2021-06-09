import {Component} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter {
  
  model = {
    celsius: null,
    fahrenheit: null
  };
  
  convertToCelsius(fahrenheitInput: number) {
    this.model.celsius = Math.round(((fahrenheitInput - 32) * 5 / 9) * 10) / 10;
  }
  
  convertToFahrenheit(celsiusInput: number) {
    this.model.fahrenheit = Math.round(((celsiusInput * 9 / 5) + 32) * 10) / 10;
  }
}
