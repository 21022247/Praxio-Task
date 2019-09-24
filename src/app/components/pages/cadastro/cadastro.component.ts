import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Cadastro');

    document.getElementById('main-container').remove();
    document.getElementById('btn-login').remove();

  }

}
