import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url='http://localhost:3000';

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get(this.url+ '/getall')
  }
  insert(insertbody:any){
    return this.http.post(this.url+ '/insert',insertbody)
  }
  edit(id:any){
    return this.http.get(this.url+ '/edit/' +id)
  }
  update(updatebody:any){
    return this.http.put(this.url+ '/update',updatebody)
  }


}
