import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit{
  // id:any;

  constructor(public service:ServiceService, public router:Router){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.nextpage(id);
  }
    


//   nextpage(){
//     this.router.navigate([]);
// }

}
