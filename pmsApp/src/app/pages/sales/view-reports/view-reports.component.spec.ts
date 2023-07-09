import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { ViewReportsComponent } from './view-reports.component';

describe('ViewReportsComponent', () => {
  let component: ViewReportsComponent;
  let fixture: ComponentFixture<ViewReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ViewReportsComponent]
    });
    fixture = TestBed.createComponent(ViewReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
