import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenzieComponent } from './recenzie.component';

describe('RecenzieComponent', () => {
  let component: RecenzieComponent;
  let fixture: ComponentFixture<RecenzieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecenzieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecenzieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
