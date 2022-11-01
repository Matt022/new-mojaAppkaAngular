import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingBeginsComponent } from './programming-begins.component';

describe('ProgrammingBeginsComponent', () => {
  let component: ProgrammingBeginsComponent;
  let fixture: ComponentFixture<ProgrammingBeginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingBeginsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammingBeginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
