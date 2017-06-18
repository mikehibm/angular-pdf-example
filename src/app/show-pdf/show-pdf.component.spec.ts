import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPdfComponent } from './show-pdf.component';

describe('ShowPdfComponent', () => {
  let component: ShowPdfComponent;
  let fixture: ComponentFixture<ShowPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
