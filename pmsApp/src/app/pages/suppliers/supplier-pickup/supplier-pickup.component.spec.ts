import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPickupComponent } from './supplier-pickup.component';

describe('SupplierPickupComponent', () => {
  let component: SupplierPickupComponent;
  let fixture: ComponentFixture<SupplierPickupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierPickupComponent]
    });
    fixture = TestBed.createComponent(SupplierPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
