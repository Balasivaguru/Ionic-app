import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message, Notifications } from 'src/app/services/data';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(public http:HttpClient,public notifications:Notifications) {
    this.http.get('../../assets/data/Notifications/notifications.json').subscribe((data:Array<Message>)=>{
      this.notifications.data=data;
      console.log(this.notifications.data);
  })
   }

  ngOnInit() {
  }

}
