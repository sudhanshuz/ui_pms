import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSidebarComponent } from './doc-sidebar.component';

describe('DocSidebarComponent', () => {
  let component: DocSidebarComponent;
  let fixture: ComponentFixture<DocSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocSidebarComponent]
    });
    fixture = TestBed.createComponent(DocSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
