import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { TodayReportComponent } from './today-report.component';

describe('TodayReportComponent', () => {
  let component: TodayReportComponent;
  let fixture: ComponentFixture<TodayReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [TodayReportComponent]
    });
    fixture = TestBed.createComponent(TodayReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
