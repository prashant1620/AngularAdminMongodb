import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TemplatesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
