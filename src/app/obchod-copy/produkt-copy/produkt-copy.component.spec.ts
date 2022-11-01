import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktCopyComponent } from './produkt-copy.component';

describe('ProduktCopyComponent', () => {
  let component: ProduktCopyComponent;
  let fixture: ComponentFixture<ProduktCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduktCopyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduktCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
