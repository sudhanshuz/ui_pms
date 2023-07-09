import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { AddDrugsComponent } from './add-drugs.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

describe('AddDrugsComponent', () => {
  let component: AddDrugsComponent;
  let fixture: ComponentFixture<AddDrugsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,MatSnackBarModule],
      declarations: [AddDrugsComponent]
    });
    fixture = TestBed.createComponent(AddDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
