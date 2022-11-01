import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktDetailComponent } from './produkt-detail.component';

describe('ProduktDetailComponent', () => {
  let component: ProduktDetailComponent;
  let fixture: ComponentFixture<ProduktDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduktDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduktDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
