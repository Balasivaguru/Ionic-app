import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  contest1=[1,2,3]
  contest2=[1,3,2,5,4]
  contest3=[1,2,3,4,5]
  contests=[this.contest1,this.contest2,this.contest3]
  selected:boolean;
  rating:number;
  star:string="";
  constructor(public http:HttpClient,public router:Router) { 
    
  }

  ngOnInit() {
    
  }
  
// clicked(event){
//   for(var i=1;i<6;i++){
//     if(i<=event)
//     document.getElementById(i.toString()).style.color="red !important";
//     else
//     document.getElementById(i.toString()).style.color="black !important";
//   }
//   this.selected=true;
// }
// display(event){
//   for(var i=1;i<6;i++){
//     if(i<=event)
//     document.getElementById(i.toString()).style.color="red ";
//     else
//     document.getElementById(i.toString()).style.color="black ";
//   }
//   this.selected=false;
// }
//   default(){
//     if(!this.selected)
//     for(var i=1;i<6;i++)
//       document.getElementById(i.toString()).style.color="black";
//   }
upload(){
  this.contest2.sort()
  // this.http.post('http://192.168.0.135:8000/sample/bala',{date:"13/4/19",contest:"fire"},{responseType:"json"}).subscribe((data)=>
  //   console.log(data));
}
contest(){
  this.router.navigate(['/contest']);
}


}
