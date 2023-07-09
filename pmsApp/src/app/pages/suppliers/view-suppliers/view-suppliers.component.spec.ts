import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { ViewSuppliersComponent } from './view-suppliers.component';

describe('ViewSuppliersComponent', () => {
  let component: ViewSuppliersComponent;
  let fixture: ComponentFixture<ViewSuppliersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ViewSuppliersComponent]
    });
    fixture = TestBed.createComponent(ViewSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
