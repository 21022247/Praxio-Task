import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  constructor(private title: Title) { }

    ngOnInit() {
    this.title.setTitle('Login');
    document.getElementById('btn-login').style.visibility = 'hidden';
   }

   removeAlert() {
      setTimeout(() => {
          $( '.alert' ).delay( 4000 ).fadeOut( 400 );
      }, 100);
   }

}
