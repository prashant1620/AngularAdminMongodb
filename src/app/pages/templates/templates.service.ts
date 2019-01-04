import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import * as Mustache from "mustache";
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {
  disableSave:any
  PreviewApi: any;
 previewData: any;
  template: any;
  mustache=require('../../../../Backend/public/mustache.html')
 private url='../../../assets/images.json'
 
 data=
 {
    "title":"Preview Component",
    "address": "World of Golf",
    "category": "Sport & Recreation",
     "created": 1536061041218,
     createdDate: "2018-09-04T11:37:21.218Z",
       description: "World of Golf Event",
       "message":"Join number of users ",
             end: 1538218856000,
          hasButtons: false,
          "videoUrl": "https://www.youtube.com/embed/PUBnlbjZFAI"
 }

  constructor(private http:HttpClient, private sanitizer: DomSanitizer,private http1:Http) { 
  
    this.template = this.sanitizer.bypassSecurityTrustHtml(Mustache.render(this.mustache,this.data));
   
 
    
  }

  getImages(){
   return this.http.get(this.url)
  }

  getPreview(){
    return this.http1.get('http://localhost:3000/api/previews')
    .map(res=>res.json());
   
  }

  //adding Preview
  addPreview(newPreview){
    console.log('add preview is called')
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http1.post('http://localhost:3000/api/preview',newPreview,{headers:headers})
    .map(res => res.json());
  }
  //delete 

  deleteContact(id){
    return this.http1.delete('http://localhost:3000/api/preview/'+id)
    .map(res => res.json());

  }

}
