import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerVehiclesComponent } from './dealer-vehicles.component';

describe('DealerVehiclesComponent', () => {
  let component: DealerVehiclesComponent;
  let fixture: ComponentFixture<DealerVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
