import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { users } from 'src/app/helpers/users';
import { ApiService } from 'src/app/services/api.service';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit{

  constructor(
    private apiservice: ApiService,
  ){}
  

  @Input()
  searchedText:string;

  @Input()
  isSearchVisible: boolean = false;

  @Input()
  users:any=[];

  ngAfterViewInit(): void {
          
  }

  
}



  
 


    


  

