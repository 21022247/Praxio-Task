import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      $(window).scroll(function() {
         if ($(this).scrollTop() > 50) {
            $('.btn-primary-outline-login').addClass('changeColor');
         }
         if ($(this).scrollTop() < 50) {
            $('.btn-primary-outline-login').removeClass('changeColor');
         }
      });
  }
}
