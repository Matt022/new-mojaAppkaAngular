import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedUserProfileComponent } from './detailed-user-profile.component';

describe('DetailedUserProfileComponent', () => {
  let component: DetailedUserProfileComponent;
  let fixture: ComponentFixture<DetailedUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedUserProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
