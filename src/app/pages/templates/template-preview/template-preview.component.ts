import { Component, OnInit } from '@angular/core';
import { TemplatesService } from '../templates.service';
import { NbDialogService, NbDialogConfig } from '@nebular/theme';
import { TemplateInfoComponent } from '../template-info/template-info.component';
import { Preview } from './Preview';
import { TemplateHtmlComponent } from '../template-html/template-html.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ngx-template-preview',
  templateUrl: './template-preview.component.html',
  styleUrls: ['./template-preview.component.scss']
})
export class TemplatePreviewComponent implements OnInit {

  previewData:Preview[];
  preview:Preview[];

  title:string;
  address:String;
  message:String;
  videoUrl:String;
  description:String;
  createdDate:String;

  constructor(private service:TemplatesService,private dialog:NbDialogService,private dom:DomSanitizer) { }

  ngOnInit() {
    this.service.getPreview()
    .subscribe(previews=>{
      //console.log(previews)
      this.previewData=previews
    })
  }
  addPreview(){
      const newPreview={
            title :this.title,
            address:this.address,
            message:this.message,
            videoUrl:this.videoUrl,
            description:this.description,
            createdDate:this.createdDate
      }
      this.service.addPreview(newPreview)
      .subscribe(preview=>{
        this.previewData.push(preview);
        this.service.getPreview()
         .subscribe(previews=>this.previewData=previews)

      })
  }
  deleteContact(id:any){
    var previews=this.previewData;
    this.service.deleteContact(id)
    .subscribe(data=>{
      if(data.n==1){
             for(var i=0;i<=previews.length;i++){
               if(previews[i]._id==id){
                previews.splice(i,1);
               }
             }
      }
    })

  }
 
  CreateDialog(){
     this.dialog.open(TemplateInfoComponent);
     
    }

}
