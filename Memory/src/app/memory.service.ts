import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { IMemoryReq } from './memory.req.model';

@Injectable({
    providedIn:"root"
})

export class MemoryService{
  http=inject(HttpClient)

  AddMemory(data:any) : Observable<any>{
     return this.http.post(`http://localhost:4000/api/creat`,data)
  }
 
  EditMemory(data:any) : Observable<any>{
    return this.http.post(`http://localhost:4000/api/edit`,data)
  }

  UpdateMemory(data:any) : Observable<any>{
    return this.http.put(`http://localhost:4000/api/update`,data)
  }
  
  DeleteMemory(data:any) : Observable<any>{
   return this.http.post(`http://localhost:4000/api/delete`,data)
 }
  }

  