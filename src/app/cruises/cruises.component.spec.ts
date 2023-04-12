import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruisesComponent } from './cruises.component';

describe('CruisesComponent', () => {
  let component: CruisesComponent;
  let fixture: ComponentFixture<CruisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CruisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
