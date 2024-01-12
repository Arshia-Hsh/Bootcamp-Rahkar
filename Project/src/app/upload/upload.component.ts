import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  name = '';
  picture: File | null = null;
  
  constructor(private http: HttpClient) {}
  
  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.picture = event.target.files[0];
    }
  }
  
  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.name);
    if (this.picture) {
      formData.append('picture', this.picture);
    }
  
    this.http.post<any>('http://localhost:3000/api/upload', formData).subscribe(response => {
        console.log('Upload successful:', response);
      }, error => {
        console.error('Error uploading:', error);
      });
  }
  // name: string = '';
  // selectedFile: File | null = null;

  // constructor(private http: HttpClient) {}
  
  // onFileSelected(event: any): void {
    //   this.selectedFile = event.target.files[0] as File;
    // }
    
    // Upload() {
      //   if (this.name && this.selectedFile) {
  //     const formData = new FormData();
  //     formData.append('name', this.name);
  //     formData.append('image', this.selectedFile);
  
  //     this.http.post('/api/upload', formData).subscribe(
  //       (response) => {
  //         console.log(response);
  //       },
  //       (error) => {
    //         console.error(error);
    //       }
    //     );
    //   } else {
      //     alert('Please enter a name and choose an image.');
  //   }
  // }

}