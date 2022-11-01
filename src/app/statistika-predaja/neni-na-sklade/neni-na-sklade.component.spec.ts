import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeniNaSkladeComponent } from './neni-na-sklade.component';

describe('NeniNaSkladeComponent', () => {
  let component: NeniNaSkladeComponent;
  let fixture: ComponentFixture<NeniNaSkladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeniNaSkladeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeniNaSkladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
