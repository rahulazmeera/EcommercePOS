import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleplaceComponent } from './saleplace.component';

describe('SaleplaceComponent', () => {
  let component: SaleplaceComponent;
  let fixture: ComponentFixture<SaleplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
