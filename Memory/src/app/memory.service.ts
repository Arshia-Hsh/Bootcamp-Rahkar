import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { IMemoryReq } from './memory.req.model';

@Injectable({
    providedIn:"root"
})

export class DiaryService {
    http = inject(HttpClient)

    submitDiary(diary: IMemoryReq) :Observable<any> {
        return this.http.post('http://localhost:3000/api/diary/submit',diary) ;
    }

    getAllDiaries():Observable<any> {
            return this.http.get('http://localhost:3000/api/diary/get') ;
    }

    getDiaryById(id:number): Observable<any> {
        return this.http.get(`http://localhost:3000/api/diary/get/${id}`);
      }

    editDiaryText(text: IMemoryReq,id:number): Observable<any> {
        return this.http.put(`http://localhost:3000/api/diary/edit/${id}` , text);
      }

    deleteDiaryById(id:number): Observable<any> {
        return this.http.delete(`http://localhost:3000/api/diary/delete/${id}`);
      }

}
