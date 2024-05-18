import { Component, Input, OnInit } from '@angular/core';
import { users } from 'src/app/helpers/users';
import { ApiService } from 'src/app/services/api.service';
import { CacheService } from 'src/app/services/cache.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

searchedText: string='';
isSearchVisible : boolean = false;
users:any=[];
cachedData:any;
loading:boolean=false;

constructor(
  private apiservice:ApiService,
  private cacheservice: CacheService
){}


ngOnInit(): void {

}

onInput(event:any){
  this.searchedText=event.target.value
  // console.log(this.searchedText)
}


OnSearchClick() {
    this.isSearchVisible = !this.isSearchVisible; 
    try{
      if(this.users && this.searchedText){
        this.loading=true;
        //getUsers
        this.apiservice.getUser(this.searchedText).subscribe(
          (data:any)=>{
            this.users=data;
            this.loading=false;
        },
        (error)=>{
          alert('Username not found!!')
        }
      )
    } 
  }
    catch(error){
      alert(error)
    }
  }

}

