import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvicnyComponent } from './cvicny.component';

describe('CvicnyComponent', () => {
  let component: CvicnyComponent;
  let fixture: ComponentFixture<CvicnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvicnyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvicnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
