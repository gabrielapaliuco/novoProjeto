import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent{

  cadastroForm!: FormGroup
  
  
  
  
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {} 
    
    
  
  
  
}
