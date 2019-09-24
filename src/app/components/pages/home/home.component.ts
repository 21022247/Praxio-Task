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

    //   $(window).scroll(function() {
  //     if ($(this).scrollTop() > 50) {
  //        $('.btn-primary-outline-login').addClass('changeColor');
  //     }
  //     if ($(this).scrollTop() < 50) {
  //        $('.btn-primary-outline-login').removeClass('changeColor');
  //     }
  //  });

   }
}
