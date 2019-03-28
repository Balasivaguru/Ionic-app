import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Timeline ,Post, Photos,Link} from 'src/app/services/data';

@Component({
  selector: 'app-contest-page',
  templateUrl: './contest-page.component.html',
  styleUrls: ['./contest-page.component.scss']
})
export class ContestPageComponent implements OnInit {
  contest1=[1,2,3]
  contest2=[1,2,3,4,5]
  contest3=[1,2,3,4,5]
  contests=[this.contest1,this.contest2,this.contest3]
  toprated:boolean
  timeline:boolean
  constructor(public http:HttpClient,public timeliner:Timeline,public photos:Photos) {
    this.http.get('http://192.168.0.135:8000/get-contest-images/contest2').subscribe((data:Array<Link>)=>{
    console.log(data);
    this.photos.data=data;
    
})
   }

  ngOnInit() {
    this.timeline=true;
  //   this.http.get('../../../assets/data/Timeline/timeline.json').subscribe((data:Array<Post>)=>{
  //     console.log(data);
  //     this.timeliner.data=data;
  // })
  }
  
 openCity(cityName) {

      this.timeline=(cityName=="Timeline");
  }
  
}
