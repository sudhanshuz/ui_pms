import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { WaitComponent } from './wait.component';

describe('WaitComponent', () => {
  let component: WaitComponent;
  let fixture: ComponentFixture<WaitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [WaitComponent]
    });
    fixture = TestBed.createComponent(WaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
