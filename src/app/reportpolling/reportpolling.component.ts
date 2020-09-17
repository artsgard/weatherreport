import { Component, OnInit } from '@angular/core';
import { PollingService } from '../shared/polling.service';
import { Report } from '../shared/report.model';
import { ReportCityService } from '../shared/report-city.service';
import { CityMode } from '../shared/city-mode.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportpolling',
  templateUrl: './reportpolling.component.html',
  styleUrls: ['./reportpolling.component.css']
})
export class ReportpollingComponent implements OnInit {
  
  private cities: any[];
  private city: any;
  readonly POLLING_TIME: number = 180000;

  constructor(private pollingService: PollingService, 
    private reportCityService: ReportCityService, private router: Router) { }
    
    ngOnInit(): void {
      this.cities = Object.values(CityMode).map((val) => {
        return {name: val, value: val}; 
      })

      this.city = this.cities[0];
      setInterval(this.timerReportCall, this.POLLING_TIME, this.pollingService, this.reportCityService);
      
      let reportList: Report[] = [];
      this.pollingService.getAllReport().subscribe(responseList => {
          responseList.map(list => {
          reportList.push(list);
        }) 
        this.reportCityService.setReportsByCity(reportList);
      });
      
    }

    onSelectChange(event: any) {
      switch (event.name) {
        case CityMode.Santiago: {
          this.router.navigate(['santiago']);
          break;
        }
        case CityMode.Lima: {
          this.router.navigate(['lima']);
          break;
        }
        case CityMode.SaoPaulo: {
          this.router.navigate(['saupaulo']);
          break;
        }
        case CityMode.BuenosAires: {
          this.router.navigate(['buenosaires']);
          break;
        }
        case CityMode.Select: {
          this.router.navigate(['select']);
          break;
        }
        default: {
          this.router.navigate(['select']);
        }
      }
    }

    timerReportCall(ps: PollingService, cs: ReportCityService) {
      let reportList: Report[] = [];
      ps.getAllReport().subscribe(responseList => {
        responseList.map(list => {
          reportList.push(list);
        }) 
        console.log("\nReport Dump\n" + JSON.stringify(reportList))
        cs.setReportsByCity(reportList);
      });
    }
}
