import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  getdata:any;
  
  constructor(public service:ServiceService, public router:Router){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.get();
  }

  get(){
    this.service.get().subscribe((data)=>{
     this.getdata=data;
  })
  }

  edit(id:any){
    this.router.navigate(['sign-up',id])
  }

  


  
}
