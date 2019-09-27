import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ViaCepAPIService } from '../../../via-cep-api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private title: Title, private viaCepAPIService: ViaCepAPIService) { }

  ngOnInit() {
    this.title.setTitle('Cadastro');

    document.getElementById('btn-login').style.visibility = 'hidden';
  }

  getCep(e, value) {
    if (e === true) {
      this.viaCepAPIService.getCep(value).subscribe(data => {
      document.getElementById('log-input').placeholder = data.logradouro;
      document.getElementById('bairro-input').placeholder = data.bairro;
      }
    );
    } else {
      console.log('invalido');
    }

  }

  removeAlert() {
    setTimeout(() => {
        $( '.alert' ).delay( 4000 ).fadeOut( 400 );
    }, 100);
 }

}
