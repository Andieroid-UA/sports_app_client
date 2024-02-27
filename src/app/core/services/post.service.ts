import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../shared/models/post';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getTimelinePosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`)
  }
}


// Incorrect
//const url = 'http://localhost:4200/${environment.apiUrl}/posts';

// Correct
//const url = `http://localhost:4200/${environment.apiUrl}/posts`;
