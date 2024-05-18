import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarUpPageComponent } from './star-up-page.component';

describe('StarUpPageComponent', () => {
  let component: StarUpPageComponent;
  let fixture: ComponentFixture<StarUpPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarUpPageComponent]
    });
    fixture = TestBed.createComponent(StarUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
