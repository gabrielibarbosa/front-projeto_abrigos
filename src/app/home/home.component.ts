import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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

}
