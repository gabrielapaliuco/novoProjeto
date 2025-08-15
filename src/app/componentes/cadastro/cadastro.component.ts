import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent{

  camposFormulario = ['nome', 'telefone', 'email', 'nascimento'];

  cadastrar(dados: any) {
    console.log('Dados do cadastro: ', dados);
  }
  
}
