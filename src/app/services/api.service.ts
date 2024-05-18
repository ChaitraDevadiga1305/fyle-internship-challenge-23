import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap, throwError } from 'rxjs';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly cacheKey = 'userApiData';
  private readonly cacheReposKey = 'reposApiData';

  constructor(
    private httpClient: HttpClient,
    private cacheservice:CacheService
  ) { }

  
  getUser(githubUsername:string) : Observable<any[]> {
    return this.httpClient.get<any[]>(`https://api.github.com/users/${githubUsername}`).pipe(
        map((response:any)=> response),tap(data=> this.cacheservice.set(this.cacheKey,data))
      );
  }

  // implement getRepos method by referring to the documentation. 
  //Add proper types for the return type and params 
  getRepos(githubUsername: string, page: number, perPage: number):Observable<any[]> {
    let params= new HttpParams()                                                       //pagination
    .set('page',page.toString())
    .set('perPage', perPage.toString())

    return this.httpClient.get<any[]>(`https://api.github.com/users/${githubUsername}/repos` ,{params}).pipe(
      map((response:any)=>response),tap(data=> this.cacheservice.set(this.cacheReposKey,data)) 
    );
}

clearCache() {
  this.cacheservice.clear(this.cacheKey);
}


}
