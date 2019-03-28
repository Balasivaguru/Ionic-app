import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Upload } from 'src/app/services/data';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 }
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {
selectedFile:File=null;
picture:Blob;
a=6;
list=["contest 1","contest 2","contest 3"]
contests:string
contest_id:string
public idc:string=""
imagename:string
public image:string | ArrayBuffer
public mail:string
uploads = new FormGroup({
  contestName: new FormControl(''),
  description: new FormControl(''),
  
});
  constructor(public http:HttpClient,public data:DataService,public uploaditem:Upload,public router:Router) { 
   console.log(localStorage.getItem("contest"))
 this.image=this.data.toUpload.toString();
  }

  ngOnInit() {
  
  
}
upload(){

this.http.post(`http://192.168.0.135:8000/upload-image-db/${localStorage.getItem("mailId")}`,{image:this.data.toUpload,upload:this.uploads.value}).subscribe((data)=>{
  console.log(data);  
  this.router.navigate(['/profile']); 
});
}
}
