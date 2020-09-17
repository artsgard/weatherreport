import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from '../shared/report.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ReportCityService {
  private cityReportLima: Report;
  private cityReportSantiago: Report;
  private cityReportBa: Report;
  private cityReportSp: Report;

  constructor(private http: HttpClient, public router: Router) { }

  setReportsByCity(reports: Report[]): void {
    reports.map(data => {
      switch (data.name) {
        case 'Santiago': {
          this.cityReportSantiago = data;
          break;
        }
        case 'Lima': {
          this.cityReportLima = data;
          break;
        }
        case 'Sao Paulo': {
          this.cityReportSp = data
          break;
        }
        case 'Buenos Aires': {
          this.cityReportBa = data
          break;
        }
        default: {
          this.cityReportLima = data;
        }
      }
    })
  }

  getReportLima(): Report {
    return this.cityReportLima;
  }

  getReportSantiago(): Report {
    return this.cityReportSantiago;
  }

  getReportBa(): Report {
    return this.cityReportBa;
  }

  getReportSp(): Report {
    return this.cityReportSp;
  }
}
