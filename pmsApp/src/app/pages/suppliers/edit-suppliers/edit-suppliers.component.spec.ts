import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { EditSuppliersComponent } from './edit-suppliers.component';

describe('EditSuppliersComponent', () => {
  let component: EditSuppliersComponent;
  let fixture: ComponentFixture<EditSuppliersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [EditSuppliersComponent]
    });
    fixture = TestBed.createComponent(EditSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
