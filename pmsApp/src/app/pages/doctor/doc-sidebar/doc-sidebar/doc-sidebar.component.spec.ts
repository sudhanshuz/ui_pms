import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { DocSidebarComponent } from './doc-sidebar.component';

describe('DocSidebarComponent', () => {
  let component: DocSidebarComponent;
  let fixture: ComponentFixture<DocSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
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
