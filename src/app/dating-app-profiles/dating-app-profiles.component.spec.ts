import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatingAppProfilesComponent } from './dating-app-profiles.component';

describe('DatingAppProfilesComponent', () => {
  let component: DatingAppProfilesComponent;
  let fixture: ComponentFixture<DatingAppProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatingAppProfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatingAppProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
