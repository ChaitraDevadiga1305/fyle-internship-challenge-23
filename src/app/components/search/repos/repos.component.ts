import { AfterViewInit, Component, Input, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements AfterViewInit{

  constructor(
    private apiservice:ApiService,
    private cdref:ChangeDetectorRef
  ){}
  
  @Input()
  searchedText:string;

  repositories:any=[];

  totalRepos:number=0;
  page:number=1;
  pageSize:number=10;
  pageSizes:number[]=[5,10,20,50,100]

  ngAfterViewInit(): void {
    this.fetchRepositories();
    this.cdref.detectChanges(); 
  }



  fetchRepositories(){
    //getRepository
    try{
      this.apiservice.getRepos(this.searchedText,this.page,this.pageSize).subscribe(
      (data:any)=>{
        this.repositories=data;
        console.log(this.repositories)
        this.totalRepos = parseInt(data.headers.get('X-Total-Count'), 10);
        this.cdref.detectChanges(); 
      },
      (err)=>{
        alert('Repository not found!!')
      }
    )}
    catch(error){
      alert(error)
    }

  }

  onPageChange(page: number): void {
    this.page = page;
    this.fetchRepositories();

  }

  onPageSizeChange(): void {
    this.page = 1;
    this.fetchRepositories();
  }

  

}
