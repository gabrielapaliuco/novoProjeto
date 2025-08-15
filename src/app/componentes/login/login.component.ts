import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  camposFormulario = [ 'email', 'telefone'];

  constructor(private router: Router) {}

  login(dados: any) {
    console.log('Dados de login: ', dados);
    this.router.navigate(['/cadastro'])
  }

}
