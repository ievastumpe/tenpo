import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router: Router ) {
  }

userRegister(){
  this.router.navigateByUrl('/home/register')
}
startSession(){
  this.router.navigateByUrl('/home/sesion')
}

}
