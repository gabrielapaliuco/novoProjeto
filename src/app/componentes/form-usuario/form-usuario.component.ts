import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { maiorIdadeValidator } from 'src/app/validator/maiorIdadeValidator';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  private static readonly TELEFONE_REGEX = /^\(?\d{2}\)?\s?\d{5}-?\d{4}$/;
  private static readonly EMAIL_REGEX = /^[\w.-]+@[\w-]+(\.[\w-]+)+$/;

  @Input() campos: string[] = [];
  @Output() submitForm = new EventEmitter<any>();

  get nome() { return this.form.get('nome'); }
  get telefone() { return this.form.get('telefone'); }
  get email() { return this.form.get('email'); }
  get nascimento() { return this.form.get('nascimento'); }

  form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { } // É utilizado o constructor para inicializar esses dados. Também é possível usar o ngOnInit no caso de esperar dados externos(API e @Input)

  ngOnInit(): void {
    this.form = this.fb.group({ //Criando o agrupamento com FormBuilder
      nome: ['', [Validators.required, Validators.minLength(2)]],
      nascimento: ['', [Validators.required, maiorIdadeValidator]],
      telefone: ['', [Validators.required, Validators.pattern(FormUsuarioComponent.TELEFONE_REGEX)]],
      email: ['', [Validators.required, Validators.pattern(FormUsuarioComponent.EMAIL_REGEX)]]
    });
  }

  enviar() {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

}
