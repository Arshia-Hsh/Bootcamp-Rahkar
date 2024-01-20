import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class transactionservice{
  http=inject(HttpClient)
  titles:any
  update:any

  save(data:any) : Observable<any>{
     return this.http.post(`http://localhost:4000/api/save`,data)
  }
 
  expenses(data:any) : Observable<any>{
    return this.http.post(`http://localhost:4000/api/expenses`,data)
  }

  getAll(data:any) : Observable<any>{
    return this.http.post(`http://localhost:4000/api/getAll`,data)
  }
  
  wallet(data:any) : Observable<any>{
   return this.http.post(`http://localhost:4000/api/wallet`,data)
 }
  }

  