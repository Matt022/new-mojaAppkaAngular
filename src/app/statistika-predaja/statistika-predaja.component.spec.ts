import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistikaPredajaComponent } from './statistika-predaja.component';

describe('StatistikaPredajaComponent', () => {
  let component: StatistikaPredajaComponent;
  let fixture: ComponentFixture<StatistikaPredajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistikaPredajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistikaPredajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
