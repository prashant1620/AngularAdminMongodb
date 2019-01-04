import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  busy : any = true;

  constructor() { }

  setBusy() {
    if(!this.busy) {
      this.busy = true;
    }
  }

  unsetBusy() {
    if(this.busy == false) return;
    setTimeout(()=>{
      if(this.busy) this.busy = false;
    }, 1500);
  }

}
