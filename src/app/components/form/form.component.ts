import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent implements OnInit {
  constructor(private title: Title) { }

    ngOnInit() {
    this.title.setTitle('Login');
    document.getElementById('main-container').remove();
    document.getElementById('btn-login').remove();
  }

  log(pass) {console.log(pass.errors.email)}

}
