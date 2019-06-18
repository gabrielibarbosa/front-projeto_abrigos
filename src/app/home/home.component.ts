import { Component,  ViewChild } from '@angular/core';
import { ThfModalComponent, ThfNotificationService, ThfCheckboxGroupOption, ThfComboOption, ThfModalAction } from '@totvs/thf-ui';
import { NgForm } from '@angular/forms';

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

  accompaniment: string = '';
  fruits: Array<string>;
  orderDetail: string = '';

  close: ThfModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Close',
    danger: true
  };

  confirm: ThfModalAction = {
    action: () => {
      this.proccessOrder();
    },
    label: 'Confirm'
  };

  public readonly accompanimentOptions: Array<ThfComboOption> = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'hazeinut', label: 'Hazelnut' },
    {value: 'milk', label: 'Milk'}
  ];

  public readonly fruitsOptions: Array<ThfCheckboxGroupOption> = [
    {value: 'orange', label: 'Orange'},
    {value: 'apple', label: 'Apple' },
    {value: 'pineapple', label: 'Pineapple'},
    {value: 'graple', label: 'Grape' },
    {value: 'strawberry', label: 'Strawberry'}
  ];

  @ViewChild('optionsForm') form: NgForm;
  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;

  constructor(private thfNotification: ThfNotificationService) { }

  closeModal() {
    this.form.reset();
    this.thfModal.close();
  }

  openQuestionnaire() {
    this.thfModal.open();
  }

  private proccessOrder() {

    if (this.form.invalid) {
      const orderInvalidMessage = 'Choose the items to confirm the order.';
      this.thfNotification.warning(orderInvalidMessage);

    } else {
      this.confirm.loading = true;

      setTimeout(() => {
        this.thfNotification.success(`Your order confirmed: ${this.fruits}, with accompaniment: ${this.accompaniment}.`);
        this.confirm.loading = false;
        this.closeModal();

      }, 700);

    }

  }

}
