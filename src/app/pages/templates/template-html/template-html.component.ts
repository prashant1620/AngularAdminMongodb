import { Component, OnInit } from '@angular/core';
import { TemplatesService } from '../templates.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'ngx-template-html',
  templateUrl: './template-html.component.html',
  styleUrls: ['./template-html.component.scss']
})
export class TemplateHtmlComponent implements OnInit {
  images
 
  constructor(private service:TemplatesService,private dom: DomSanitizer) { }

  ngOnInit() {
   /*this.service.getImages().subscribe(data=>{
     //console.log(data)
     this.images=data
   })*/
 this.service.getPreview()
    .subscribe(result=>{
     // console.log(result)
      this.images=result
    })

  }

}
