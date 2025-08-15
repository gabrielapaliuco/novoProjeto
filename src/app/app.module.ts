import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { SucessoCadastroComponent } from './componentes/sucesso-cadastro/sucesso-cadastro.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { FormUsuarioComponent } from './componentes/form-usuario/form-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    SucessoCadastroComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    FormUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
