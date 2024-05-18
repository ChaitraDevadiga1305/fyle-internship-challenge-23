import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  set(key:string, value:any):void{
    localStorage.setItem(key, JSON.stringify(value))
  }

  get(key:string):any{
    const cachedData=localStorage.getItem(key);
    return cachedData ? JSON.parse(cachedData):null; 
  }

  has(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  clear(key:string){
    localStorage.removeItem(key);
  }


  clearAll(){
    localStorage.clear();
  }
}
