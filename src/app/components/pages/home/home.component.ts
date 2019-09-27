import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private title: Title, private router: Router) { }

  ngOnInit() {
    this.title.setTitle('Home');
    document.getElementById('see-more').addEventListener('click', () => {
      $('body,html').animate({ scrollTop: $('body').height() }, 300);
     });

    document.getElementById('btn-login').style.visibility = 'visible';
   }

   externalLink() {
      window.open('http://praxio.com.br/', '_blank');
   }
}
