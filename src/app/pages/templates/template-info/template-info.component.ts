import { Component, OnInit, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TemplatesService } from '../templates.service';
import { Preview } from '../template-preview/Preview';
import { DomSanitizer } from '@angular/platform-browser';





export interface Employee {
  employeeId:number;
  employeeName: string;
  employeeSalary: number;
  employeeLocation:string;
  employeeCompany:string;
  employeeAge:number;
  employeeAddress:string;
  employeeCountry:string;
 
}



@Component({
  selector: 'ngx-template-info',
  templateUrl: './template-info.component.html',
  styleUrls: ['./template-info.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TemplateInfoComponent implements OnInit {
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  firstname:string
  fromShowing:boolean=false;
  submitted = false;
  firstCtrl1:String;secondCtrl1:String;text:string
  firstCtrl2:String;secondCtrl2:String;
  firstCtrl3:String;secondCtrl3:String;
  firstCtrl4:String;

  previewData:Preview[];
  preview:Preview[];

  filename:string;
  faPlus = faPlus;
   
  previewdata
 
  date = new Date();
  settings={
        bigBanner:true,
        timePicker:{
          time:true
        },
          format:'dd:MMM:yyyy  hh:mm:ss a',
     defaultOpen:false,
        closeOnSelect:false,
        popover:false,
        
}
@Input() format:boolean;


 name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';
  @ViewChild("myckeditor") ckeditor: any;
  
 

  employee:Employee[]=[
    { employeeId:1,employeeName:'kiran',employeeCompany:'LineSystems',employeeLocation:'hybd',employeeSalary:12000,employeeAge:25,employeeAddress:'hybd',employeeCountry:'USA'},
    { employeeId:2,employeeName:'sai',employeeCompany:'wintech',employeeLocation:'Banglr',employeeSalary:20000,employeeAge:30,employeeAddress:'bnglr',employeeCountry:'SA'},
    { employeeId:3,employeeName:'Ravi',employeeCompany:'Systems',employeeLocation:'delhi',employeeSalary:15000,employeeAge:20,employeeAddress:'delhi',employeeCountry:'IND'},
    { employeeId:4,employeeName:'Ramu',employeeCompany:'ManageSystems',employeeLocation:'hybd',employeeSalary:25000,employeeAge:27,employeeAddress:'hybd',employeeCountry:'PAK'}
  ]

  
  constructor(private fb: FormBuilder,private service:TemplatesService,private dom:DomSanitizer) {
   
   
   }


   
  
 
   ngOnInit() {
    this.service.getPreview()
    .subscribe(previews=>{
      //console.log(previews)
      this.previewData=previews
    })
  
    this.firstForm = this.fb.group({
      firstCtrl1: ['', Validators.required],
     firstCtrl2: ['', Validators.required],
     firstCtrl3: ['', Validators.required],
     firstCtrl4: [false, Validators.requiredTrue],
     //firstCtrl: ['', Validators.required],
    
    
    });
  

    this.secondForm = this.fb.group({
      secondCtrl1: ['', Validators.required],
      secondCtrl2: ['', Validators.required],
      secondCtrl3: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      //thirdCtrl: ['', Validators.required],
    });

    
  

    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true,
      
        "uiColor": "#FFFFFF",
        "toolbarGroups": [
              { "name": "document", "groups": [ "mode", "document", "doctools" ] },
              { "name": "editing", "groups": [ "find", "selection", "spellchecker", "editing" ] },
              { "name": "forms", "groups": [ "forms" ]},
          ],
          "removeButtons":"Templates,Find,Replace,Scayt,SelectAll"
         
     
      };
     
  }
 
  onFirstSubmit(e) {
    this.submitted = true;
   
    if (this.firstForm.invalid) {
      return;
      //console.log('invalid form')
  }
    if (this.firstForm.valid) {
    //this.firstForm.markAsDirty();
   
   
    //console.log(this.firstForm.value)
    
    //this.firstForm.reset();
    }
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
    //console.log(this.secondForm.value);
    this.previewdata=this.secondForm.value
    //console.log(this.previewdata)
   
   
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
    //console.log(this.thirdForm.value)
  }

  onChange($event: any): void {
    console.log("onChange");
    //this.log += new Date() + "<br />";
  }

  selectFile(e: Event) {
    let element: HTMLElement = document.querySelector('input[type="file"]') as HTMLElement;
   element.click();
  }
  
  
onDateSelect(){
  console.log("this is the data")
}
addPreview(){
  const newPreview={
        title:this.firstCtrl1,
        address:this.firstCtrl2,
        videoUrl:this.secondCtrl1,


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

}
