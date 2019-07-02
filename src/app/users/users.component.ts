import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { ThfModalComponent, ThfModalAction, ThfNotificationService } from '@totvs/thf-ui';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
  doador: any = {};
  abrigo: any = {};
  doadorAdicionado: Array<any> = [];
  abrigoAdicionada: Array<any> = [];

  public telefoneMask = '(99) 99999-9999';
  public cpfMask = '999.999.999-99';

 @ViewChild('formDoador') formDoador: NgForm;
 @ViewChild('formAbrigo') formAbrigo: NgForm;

 @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;

  constructor(private thfNotification: ThfNotificationService,
              private router: Router,
              private userService: UserService) {
  }

  cadastrarDoador(){
    if (this.formDoador.invalid) {

      this.thfNotification.warning("Dados inválidos, confira se preencheu o formulário corretamente!")
    } else {
      console.log(this.doador);
      this.userService.postDoador(this.doador).subscribe((res) => {
        console.log("teste disciplinas" + res);
        this.thfNotification.success(`Disciplina adicionada com sucesso!`);
      });
      this.formDoador.reset();
      this.redirect();
    }
  }
  cadastrarAbrigo(){
    if (this.formAbrigo.invalid) {

      this.thfNotification.warning("Dados inválidos, confira se preencheu o formulário corretamente!")
    } else {
      console.log(this.abrigo);
      this.userService.postAbrigo(this.abrigoAdicionada).subscribe((res) => {
        console.log("teste abrigo" + res);
        this.thfNotification.success(`Abrigo adicionado com sucesso!`);
      });
      this.formAbrigo.reset();
      this.redirect();
    }
  }

  redirect(){
    this.router.navigate(['feed']);
  }

}
