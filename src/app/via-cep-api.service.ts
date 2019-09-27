import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViaCepAPIService {

  constructor(private httpClient: HttpClient) {}

  getCep(cep) {
      return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`);
     }
}
