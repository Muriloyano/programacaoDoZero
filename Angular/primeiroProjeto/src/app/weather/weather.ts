import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from '../services/weather'; 
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather {

  locationsForm: FormGroup;
  weatherData: any; 

  constructor(
    private builder: FormBuilder, 
    private weatherService: WeatherService 
  ) { 
    this.locationsForm = this.builder.group({
      city: ['', Validators.required]
    });
  }

  obterClima() {
    let city = String(this.locationsForm.get('city')?.value);

    if (city) {
      this.weatherService.getLatLon(city).subscribe((data: any) => {
        
        if (data && data.length > 0) {
          const cidadeEncontrada = data[0]; 
          
          console.log("Cidade encontrada:", cidadeEncontrada);

          this.buscarDadosDoClima(cidadeEncontrada.lat, cidadeEncontrada.lon);
        } else {
          alert('Cidade não encontrada!');
        }
      });
    }
  }

  buscarDadosDoClima(lat: number, lon: number) {
    this.weatherService.getWeather(lat, lon).subscribe((data: any) => {
      this.weatherData = data; 
      console.log("Dados do Clima:", data);
    });
  }
}