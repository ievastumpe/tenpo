import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inforegister',
  templateUrl: './inforegister.page.html',
  styleUrls: ['./inforegister.page.scss'],
})
export class InforegisterPage {

  constructor( private router: Router ) { }

  infoRegister(){
    this.router.navigateByUrl('home/inforegister/requiredid')
  }


}
