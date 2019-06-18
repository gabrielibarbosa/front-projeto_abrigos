import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ThfModalComponent, ThfModalAction } from '@totvs/thf-ui';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
  reactiveForm: FormGroup;

  public telefoneMask = '(99) 99999-9999';
  public cpfMask = '999.999.999-99';

  public readonly modalPrimaryAction: ThfModalAction = {
    action: () => this.reactiveFormModal.close(),
    label: 'Close'
  };

  @ViewChild('reactiveFormData') reactiveFormModal: ThfModalComponent;

  constructor(private fb: FormBuilder) {
    this.createReactiveForm();
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(30)
      ])],
      address: ['', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(50)
      ])],
      number: ['', Validators.compose([
        Validators.required, Validators.min(1), Validators.max(99999)
      ])],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  saveForm() {
    this.reactiveFormModal.open();
  }

}
