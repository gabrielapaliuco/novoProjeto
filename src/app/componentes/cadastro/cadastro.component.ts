import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent{

  cadastroForm!: FormGroup
  
  //private router = inject(Router); //Injeção de dependência para realizar rotas
  //private fb = inject(FormBuilder); // Injeção de dependência para melhorar o cadastro form
  
  
  
  
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {} 
    
    
  
  
  
}
