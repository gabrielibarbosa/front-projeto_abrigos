import { Component, OnInit, ViewChild } from '@angular/core';
import { ThfModalComponent, ThfNotificationService, ThfModalAction } from '@totvs/thf-ui';
import { Router } from '@angular/router';
import { UserService } from 'src/app/users/service/user.service';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/users/model/post';

@Component({
  selector: 'app-feed-init',
  templateUrl: './feed-init.component.html',
  styleUrls: ['./feed-init.component.css']
})
export class FeedInitComponent {
  post: any = {};
  posts: Array<Post> = [
    {
      titulo: 'Ajude os animais!',
      descricao: 'Você não sabe como pode ajudar os animais abandonados? Agora você pode adotar e fazer doações aos abrigos através desta plataforma!',
      contador:"0"
    },

  ];

  help: string;
  label: string;
  technologies: Array<string> = ['Angular', 'Typescript', 'React', 'Babel', 'Jasmine', 'Vue'];
  value: string;

  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;
  @ViewChild('formPost') formPost: NgForm;
  postLista: import("/home/gabrieli/Documentos/faculdade/front-projeto_abrigos/src/app/users/model/post").Post[];

  constructor(private thfNotification: ThfNotificationService,
    private router: Router,
    private userService: UserService) {
}

  sampleItems: Array<any> = [
    {
      title: 'Ajude os animais!',
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

  ngOnInit() {
    this.cardInicial();
  }
  postList() {
    this.userService.getPost().subscribe((res) => {
      this.postLista = res;
    });
  }
  cardInicial() {
    this.label = this.post.titulo;
    this.value = this.post.descricao;
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
      this.cadastrarPost();
    this.redirect();
  
  },
    label: 'Confirm'
  };

  cadastrarPost(){
    if (this.formPost.invalid) {

      this.thfNotification.warning("Dados inválidos, confira se preencheu o formulário corretamente!")
    } else {
      console.log(this.post);
      this.posts.push(this.post);
      this.userService.postDoador(this.post).subscribe((res) => {
        console.log("teste post" + res);
        this.thfNotification.success(`Post adicionado com sucesso!`);
      });
      this.formPost.reset();
      this.redirect();
    }
  }

  loginPortal() {
    if (this.formPost.invalid) {

      this.thfNotification.warning("Dados inválidos, confira se preencheu o formulário corretamente!")
    } else {
      this.userService.loginUsers(this.post).subscribe((res) => {
        console.log(res);
      });
      
      this.formPost.reset();
      this.thfModal.close();
      this.redirect();
    }
  }

  redirect(){
    this.router.navigate(['feed']);
  }

seguir(){
  for(let i=0; i=i +1; i++){
    this.post.contador = i;
  }
}

  closeModal() {
  
    this.formPost.reset();
    this.thfModal.close();
  }

  openQuestionnaire() {
    this.thfModal.open();
  }

}
