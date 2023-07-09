import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { AddSuppliersComponent } from './add-suppliers.component';

describe('AddSuppliersComponent', () => {
  let component: AddSuppliersComponent;
  let fixture: ComponentFixture<AddSuppliersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [AddSuppliersComponent]
    });
    fixture = TestBed.createComponent(AddSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
