import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';


import { ApiService } from 'src/app/services/api.service';
import { CacheService } from 'src/app/services/cache.service';


import { SearchComponent } from './search.component';
import { ProfileComponent } from './profile/profile.component';
import { ReposComponent } from './repos/repos.component';
import { SkeletonLoaderComponent } from '../skeleton-loader/skeleton-loader.component';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let apiservice:ApiService

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent,ProfileComponent, ReposComponent, SkeletonLoaderComponent  ],
      imports:[ HttpClientTestingModule, FormsModule,NgxPaginationModule ],
      providers:[ApiService, CacheService]
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update searchedText on input event', () => {
    const inputElement = fixture.debugElement.query(By.css('input[name="Username"]')).nativeElement;
    const testValue = 'testuser';

    inputElement.value = testValue;
    inputElement.dispatchEvent(new Event('input'));

    expect(component.searchedText).toBe(testValue);
  });

  it('should display skeleton loader when loading', () => {
    component.loading = true;
    fixture.detectChanges();

    const skeletonLoader = fixture.debugElement.query(By.css('app-skeleton-loader'));
    expect(skeletonLoader).not.toBeNull();
  });

  it('should pass correct inputs to profile component', () => {
    component.isSearchVisible = true;
    component.searchedText = 'testuser';
    component.users = [{ name: 'repo1' }];
    fixture.detectChanges();

    const profileComponent = fixture.debugElement.query(By.css('app-profile')).componentInstance;
    expect(profileComponent.isSearchVisible).toBeTrue();
    expect(profileComponent.searchedText).toBe('testuser');
    expect(profileComponent.users).toEqual([{ name: 'repo1' }]);
  });
});

