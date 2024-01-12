import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http :HttpClient) { }

  uploadImages(name:string , image : File): Observable<any> {
    const formData = new FormData() ;
    formData.append('name', name);
    formData.append('image', image);
    return this.http.post('http://localhost:3000/upload' , formData);
  }

  getAllImages(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/List');
  }
}