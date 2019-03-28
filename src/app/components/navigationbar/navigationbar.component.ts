import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/services/sidenav.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})

export class NavigationbarComponent implements OnInit {
filename:string
mail:string="n"
file;


  constructor(public router: Router,public sidenav:SidenavService,public http:HttpClient,public data:DataService) {   


    if(this.router.url == '/profile'){
       this.data.loading=true
    }
  }

  ngOnInit() {
   
  }
  notify() {
    this.router.navigate(['/notifications']);

  }
  home() {
    this.router.navigate(['/home']);

  }
  add() {
    this.loadFile(event);
    this.router.navigate(['/add']);  
  }
  profile() {
    this.router.navigate(['/profile']);
  }

  loadFile(event) {
    var reader = new FileReader;
    var self = this;
    var input:string | ArrayBuffer;
    reader.onload = function (progressEvent) {
        input = this.result;
      self.data.toUpload=this.result;
    
    
    

    }
    
  
    reader.readAsDataURL(event.target.files[0]);

    
    
  }
  
getreq(input){
  
  this.http.post('http://192.168.0.135:8000/upload-image',{name:this.filename,imageFile:input},{responseType:"json"}).subscribe((data)=>{
  console.log(data);
   

});


}

  // loadimage(event) {
   
  //   var file, img;
  //     img = new Image();
  //     img.onload = function() {
  //         console.log(this.width + " " + this.height);
          
  //     };
  //     img.onerror = function() {
  //         alert( "not a valid file: " + file.type);
  //     };
  //     img.src = URL.createObjectURL(event.target.files[0]);
  //     this.data.url=URL.createObjectURL(event.target.files[0]);
  //     console.log(event.target.result)

  // }

 
}



