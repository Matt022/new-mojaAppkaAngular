import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObchodCopyComponent } from './obchod-copy.component';

describe('ObchodCopyComponent', () => {
  let component: ObchodCopyComponent;
  let fixture: ComponentFixture<ObchodCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObchodCopyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObchodCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
