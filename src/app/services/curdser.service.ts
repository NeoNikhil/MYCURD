import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CURDSERService {

  constructor(private http:HttpClient) { }



  get(){
    return this.http.get('http://localhost:3000/posts')
  }
  post(data:any){
    return this.http.post('http://localhost:3000/posts',data)
  }
  Delete(id:any){
    return this.http.delete(`http://localhost:3000/posts/${id}`)
  }
  Update(id:any,data:any){
    return this.http.put('http://localhost:3000/posts/'+id,data)
  }

 



}
