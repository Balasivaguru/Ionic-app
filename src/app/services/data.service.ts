import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class DataService {
  loading:boolean
mailId:string
toUpload:string | ArrayBuffer
constructor() {
this.mailId = localStorage.getItem('mailId');
}




}
