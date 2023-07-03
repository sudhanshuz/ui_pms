import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDrugsComponent } from './edit-drugs.component';

describe('EditDrugsComponent', () => {
  let component: EditDrugsComponent;
  let fixture: ComponentFixture<EditDrugsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDrugsComponent]
    });
    fixture = TestBed.createComponent(EditDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
