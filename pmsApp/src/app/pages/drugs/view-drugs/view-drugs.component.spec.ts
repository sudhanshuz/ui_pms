import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ViewDrugsComponent } from './view-drugs.component';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ActivatedRoute } from '@angular/router';
describe('ViewDrugsComponent', () => {
  let component: ViewDrugsComponent;
  let fixture: ComponentFixture<ViewDrugsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,MatSnackBarModule,MatSnackBar],
      declarations: [ViewDrugsComponent],
      providers: [
        { provide: ActivatedRoute,MatSnackBar},
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(ViewDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("testing getValue() if user is admin",()=>{
    expect(component.getValue()).toBe(true);
  })
});
