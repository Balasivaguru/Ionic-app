import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public sidenav:SidenavService) { }

  ngOnInit() {
  }
  flip(action:number){
    if(action==1)
    document.getElementById('flip-box-inner').style.cssText='transform: rotateY(180deg);';
    if(action==2)
    document.getElementById('flip-box-inner').style.cssText='';
    
}
}
