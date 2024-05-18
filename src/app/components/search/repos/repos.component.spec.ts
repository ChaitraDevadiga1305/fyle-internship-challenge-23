import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { ReposComponent } from './repos.component';

describe('ReposComponent', () => {
  let component: ReposComponent;
  let fixture: ComponentFixture<ReposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReposComponent],
      imports:[HttpClientTestingModule, NgxPaginationModule,FormsModule]
    });
    fixture = TestBed.createComponent(ReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
