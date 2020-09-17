import { Component, OnInit } from '@angular/core';
import { CityMode } from '../shared/city-mode.enum';
import { Report } from '../shared/report.model';
import { ReportCityService } from '../shared/report-city.service';
import { Router, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  private currentReport: Report;
  private currentCityPhrase: string;
  private currentCityName: string;
  private backgroundImg: string;
  private descriptionShort: string;
  private description: string;
  private temp: string;
  private pressure: string;
  private humidity: string;
  private wind: string;
  private clouds: string;
  private isCity: boolean;

  constructor(private reportCityService: ReportCityService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.backgroundImg = '../../assets/Default.jpg'
    //this.isCity = false;

    this.activatedRoute.data.subscribe((data: Data) => {
      let key: CityMode = data.mode;
      switch (key) {
        case CityMode.Santiago: {
          this.currentReport = this.reportCityService.getReportSantiago();
          this.currentCityPhrase = 'The incredible city of '
          this.currentCityName = 'Santiago'
          this.backgroundImg = '../../assets/SantiagodeChile.jpg'
          this.isCity = true;
          break;
        }
        case CityMode.Lima: {
          this.currentReport = this.reportCityService.getReportLima();
          this.currentCityPhrase = 'You are at the wonderful City of '
          this.currentCityName = 'Lima'
          this.backgroundImg = '../../assets/Lima.jpg'
          this.isCity = true;
          break;
        }
        case CityMode.SaoPaulo: {
          this.currentReport = this.reportCityService.getReportSp();
          this.currentCityPhrase = 'The beautiful city of '
          this.currentCityName = 'São Paulo'
          this.backgroundImg = '../../assets/SP.jpg'
          this.isCity = true;
          break;
        }
        case CityMode.BuenosAires: {
          this.currentReport = this.reportCityService.getReportBa();
          this.currentCityPhrase = 'The great city of '
          this.currentCityName = 'Buenos Aires'
          this.backgroundImg = '../../assets/BA.jpg'
          this.isCity = true;
          break;
        }
        case CityMode.Select: {
          this.backgroundImg = '../../assets/Default.jpg'
          this.currentCityPhrase = 'Pick your favorite city,'
          this.currentCityName = ''
          this.isCity = false;
          break;
        }
        default: {
          this.backgroundImg = '../../assets/Default.jpg'
          this.currentCityPhrase = 'Pick your favorite city'
          this.currentCityName = ''
          this.isCity = false;
        }
      }
      console.log("\n\ncity:\n" + this.currentCityName + "\n\n" + JSON.stringify(this.currentReport))
    });
    this.setWeatherProp(this.currentReport);
  }

  setWeatherProp(jsn: any): void {
    if (jsn !== undefined) {
      this.descriptionShort = jsn.weather[0].main;
      this.description = jsn.weather[0].description;
      this.temp = jsn.main.temp;
      this.pressure = jsn.main.pressure;
      this.humidity = jsn.main.humidity;
      this.wind = jsn.wind.speed;
      this.clouds = jsn.clouds.all;
    }

  }
}