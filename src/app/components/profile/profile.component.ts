import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Timeline, Post, Photos, Link } from 'src/app/services/data';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
selected:boolean;



  constructor(public http:HttpClient,public timeliner:Timeline,public data:DataService,public photos:Photos) {
   this.display1();
 }

  ngOnInit() {
  }
 
  display1(){
    // http://192.168.0.135:8000/timeline

  //   this.http.get('../../../assets/data/Timeline/timeline.json').subscribe((data:Array<Post>)=>{
  //     console.log(data);
  //     this.timeliner.data=data;
  //     this.data.loading=false;
  // })
  this.http.get('http://192.168.0.135:8000/view-images').subscribe((data:Array<Link>)=>{
    // console.log(data);
    this.data.loading=false;
    this.photos.data=data;
    console.log(this.photos.data);
    
})
}
clicked(event){
  for(var i=1;i<6;i++){
    if(i<=event)
    document.getElementById(i.toString()).style.color="red !important";
    else
    document.getElementById(i.toString()).style.color="black !important";
  }
  this.selected=true;
}
display(event){
  for(var i=1;i<6;i++){
    if(i<=event)
    document.getElementById(i.toString()).style.color="red ";
    else
    document.getElementById(i.toString()).style.color="black ";
  }
  this.selected=false;
}
  default(){
    if(!this.selected)
    for(var i=1;i<6;i++)
      document.getElementById(i.toString()).style.color="black";
  }

copyToClipboard(txt){
  var el=document.createElement('textarea');
  el.value=txt;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
leaderboard(){
  this.photos.data.sort(function(a,b){
    return Number(b.rates) - Number(a.rates);
  })
}
}

