import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { DeleteDrugsComponent } from './delete-drugs.component';

describe('DeleteDrugsComponent', () => {
  let component: DeleteDrugsComponent;
  let fixture: ComponentFixture<DeleteDrugsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [DeleteDrugsComponent]
    });
    fixture = TestBed.createComponent(DeleteDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
