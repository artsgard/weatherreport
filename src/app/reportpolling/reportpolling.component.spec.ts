import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportpollingComponent } from './reportpolling.component';

describe('ReportpollingComponent', () => {
  let component: ReportpollingComponent;
  let fixture: ComponentFixture<ReportpollingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportpollingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportpollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
