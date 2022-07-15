import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificacaoService } from '../notificacao.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  formContato = this.fb.group({
    nome: ['',[
      Validators.minLength(3),
      Validators.required
    ]],
    assunto: ['',[
      Validators.minLength(5),
      Validators.required
    ]],
    telefone: ['',[
      Validators.minLength(8),
      Validators.required
    ]],
    email: ['',[
      Validators.email,
      Validators.required
    ]],
    mensagem: ['',[
      Validators.minLength(10),
      Validators.required
    ]]
  });    

  constructor(
    private fb: FormBuilder,
    private notificacaoService: NotificacaoService
  ) { }

  ngOnInit(): void {
  }

  enviarFormulario(){
    this.notificacaoService.notificar(`Formulario enviado com sucesso `);
    this.formContato.reset();
  }

}
