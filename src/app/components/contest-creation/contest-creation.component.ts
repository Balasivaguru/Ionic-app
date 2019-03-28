import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContestDetails } from 'src/app/services/data';
@Component({
  selector: 'app-contest-creation',
  templateUrl: './contest-creation.component.html',
  styleUrls: ['./contest-creation.component.scss']
})
export class ContestCreationComponent implements OnInit {
  contests = new FormGroup({
    contest_name: new FormControl(''),
    contest_theme: new FormControl(''),
    contest_deadline: new FormControl(''),
    contest_startline: new FormControl(''),
    mail: new FormControl(''),
    name: new FormControl(''),
  });
  
  constructor(public http:HttpClient) { }

  ngOnInit() {
  }
create(){
  localStorage.setItem("contest",this.contests.value.contest_name)
  console.log(this.contests.value)
  this.http.post('http://192.168.0.135:8000/edit-contest/submit',this.contests.value,{responseType:"json"}).subscribe((data)=>
    console.log(data));
  
}
edit(){
  this.http.get('http://192.168.0.135:8000/edit-contest/request/Balasivaguru S').subscribe((data:ContestDetails)=>
    {
      this.contests.setValue(data);
    }
    );
    
}
delete(){
  this.http.get('http://192.168.0.135:8000/edit-contest/delete/Balasivaguru S').subscribe((data)=>
    {
      alert(data);
    }
    );
}

}
