import { Component,  ViewChild } from '@angular/core';
import { ThfModalComponent, ThfNotificationService, ThfCheckboxGroupOption, ThfComboOption, ThfModalAction } from '@totvs/thf-ui';
import { NgForm } from '@angular/forms';
import { logging } from 'protractor';
import { UserService } from '../users/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 login: any = {};


 @ViewChild('formLogin') formLogin: NgForm;
 @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;

 constructor(private thfNotification: ThfNotificationService,    private router: Router,
   private userService: UserService) { }

  sampleItems: Array<any> = [
    {
      title: 'Ajude os abrigos e os animais!',
      description: 'Você não sabe como pode ajudar os animais abandonados? Agora você pode adotar e fazer doações aos abrigos através desta plataforma!',
      date: 'Junho 15, 2019',
      imagem: '/assets/imagem.jpg'
    },
    {
      title: 'Cadastre seu abrigo!',
      description: 'Cadastrando seu abrigo em nossa plataforma, as pessoas poderão doar, adotar e conhecer seu trabalho!',
      date: 'Junho 10, 2019',
      imagem: '/assets/imagem2.jpg'
    },
   
  ];
 
  redirectLink(link: string) {
    window.open(link, '_blank');
  }



  close: ThfModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Fechar',
    danger: true
  };

  confirm: ThfModalAction = {
    action: () => {
    //  this.loginPortal();
    this.redirect();
  
  },
    label: 'Confirm'
  };

  loginPortal() {
    if (this.formLogin.invalid) {

      this.thfNotification.warning("Dados inválidos, confira se preencheu o formulário corretamente!")
    } else {
      this.userService.loginUsers(this.login).subscribe((res) => {
        console.log(res);
      });
      
      this.formLogin.reset();
      this.thfModal.close();
      this.redirect();
    }
  }

  redirect(){
    this.router.navigate(['feed']);
  }



  closeModal() {
  
    this.formLogin.reset();
    this.thfModal.close();
  }

  openQuestionnaire() {
    this.thfModal.open();
  }

  private proccessOrder() {

    if (this.formLogin.invalid) {
      const orderInvalidMessage = 'Choose the items to confirm the order.';
      this.thfNotification.warning(orderInvalidMessage);

    } else {
      this.confirm.loading = true;

     
    }

  }

}
