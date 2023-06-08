import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
   
  // getalldata:any;
  id:any;
  username:string='';
  designation:string='';
  salary:string='';
  experience:string='';

  constructor(public service:ServiceService, public router:Router, public actroute:ActivatedRoute){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.get();
    let id=this.actroute.snapshot.paramMap.get('id')
    this.service.edit(id).subscribe((data:any)=>{
      this.id=data[0].id,
      this.username=data[0].username,
      this.designation=data[0].designation,
      this.salary=data[0].salary,
      this.experience=data[0].experience
    })
  }

  insert(){
    let insertbody={
      username:this.username,
      designation:this.designation,
      salary:this.salary,
      experience:this.experience
     }
     this.service.insert(insertbody).subscribe((data)=>{
      console.log(data);
      this.nextpage();
     })
  }

  update(){
    let updatebody={
      id:this.id,
      username:this.username,
      designation:this.designation,
      salary:this.salary,
      experience:this.experience
    }
    console.log(updatebody);
    
    this.service.update(updatebody).subscribe((data)=>{
      console.log(data);
      this.nextpage();
    })
    
  }

  
  nextpage(){
    this.router.navigate(['form'])
  }


}
