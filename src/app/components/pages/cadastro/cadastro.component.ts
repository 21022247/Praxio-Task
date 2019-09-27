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

    document.getElementById('btn-login').style.visibility = 'hidden';
  }

  removeAlert() {
    setTimeout(() => {
        $( '.alert' ).delay( 4000 ).fadeOut( 400 );
    }, 100);
 }

}
