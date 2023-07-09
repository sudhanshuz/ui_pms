import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { EditDrugsComponent } from './edit-drugs.component';
import { ActivatedRoute } from '@angular/router';


describe('EditDrugsComponent', () => {
  let component: EditDrugsComponent;
  let fixture: ComponentFixture<EditDrugsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [EditDrugsComponent],
      providers: [
        { provide: ActivatedRoute},
      ]
    });
    fixture = TestBed.createComponent(EditDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
