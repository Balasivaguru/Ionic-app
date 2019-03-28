import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
selector: 'app-loginpage',
templateUrl: './loginpage.component.html',
styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent {


constructor(public router:Router,public http:HttpClient, public zone:NgZone) {

}



canEnterPassword:boolean = false;
canEnterEmail:boolean = true;
toCreatePassword:boolean = false;
toConfirmPassword:boolean = false;
noMatch:boolean = false;
loginEmail = new FormGroup({
email: new FormControl('')
})
loginPassword = new FormGroup({
password: new FormControl('')
})
createPassword = new FormGroup({
password: new FormControl('')
})
confirmPassword = new FormGroup({
password: new FormControl('')
})

enteredEmail(){
console.log(this.loginEmail.value.email);
this.http.get('http://192.168.0.135:8000/verifymail/'+this.loginEmail.value.email+'').subscribe((data)=>{
console.log(data);
if(data){
localStorage.setItem('mailId',this.loginEmail.value.email);
this.http.get(`http://192.168.0.135:8000/checkpasswordpresent/${this.loginEmail.value.email}`).subscribe((data)=>{
console.log(data);
if(data){
this.canEnterPassword = true;
this.canEnterEmail = false;
this.toCreatePassword = false;
this.toConfirmPassword = false;
} else{
this.canEnterPassword = false;
this.canEnterEmail = false;
this.toCreatePassword = true;
this.toConfirmPassword = false;
}
})
}
else{
alert('Enter a valid Email address');
window.location.href = "/login";
}
})
}


enteredPassword(){
this.http.post('http://192.168.0.135:8000/verifypassword/'+this.loginEmail.value.email,{pwd:this.loginPassword.value.password}).subscribe((data)=>{
console.log(data);
if(data){
this.zone.run(()=>{
this.router.navigate(['/home']);
})
}
else{
alert('Incorrect Password');
this.afterCreateingPwd();
}
})
}

createdPassword(){
this.canEnterPassword = false;
this.canEnterEmail = false;
this.toCreatePassword = false;
this.toConfirmPassword = true;
}

confirmedPassword(){
if(this.confirmPassword.value.password == this.createPassword.value.password){
this.noMatch=false;
console.log(localStorage.getItem('mailId')+this.confirmPassword.value.password);
this.http.get(`http://192.168.0.135:8000/createpassword/${localStorage.getItem('mailId')}/${this.confirmPassword.value.password}`).subscribe((data)=>{
this.afterCreateingPwd();
console.log(data);
console.log("Create Password successfully");
})

}
else{
this.noMatch=true;
}
}

afterCreateingPwd(){
this.canEnterPassword = true;
this.canEnterEmail = false;
this.toCreatePassword = false;
this.toConfirmPassword = false;
}

}
