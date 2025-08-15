import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent{

  camposFormulario = ['nome', 'telefone', 'email', 'nascimento'];

  constructor(private router: Router) {}

  cadastrar(dados: any) {
    console.log('Dados do usuário: ', dados);
    this.router.navigate(['/login']);
  }
  
}
