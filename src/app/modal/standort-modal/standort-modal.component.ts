import { Component, OnInit } from '@angular/core';
import {MDBModalRef} from 'ng-uikit-pro-standard';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-standort-modal',
  templateUrl: './standort-modal.component.html',
  styleUrls: ['./standort-modal.component.scss']
})
export class StandortModalComponent implements OnInit {

  validatingForm: FormGroup;

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      modalFormLoginEmail: new FormControl('', Validators.email),
      modalFormLoginPassword: new FormControl('', Validators.required),
      modalFormRegisterEmail: new FormControl('', Validators.email),
      modalFormRegisterPassword: new FormControl('', Validators.required),
      modalFormRegisterRepeatPassword: new FormControl('', Validators.required)
    });
  }

  get modalFormLoginEmail() {
    return this.validatingForm.get('modalFormLoginEmail');
  }

  get modalFormLoginPassword() {
    return this.validatingForm.get('modalFormLoginPassword');
  }

  get modalFormRegisterEmail() {
    return this.validatingForm.get('modalFormRegisterEmail');
  }

  get modalFormRegisterPassword() {
    return this.validatingForm.get('modalFormRegisterPassword');
  }

  get modalFormRegisterRepeatPassword() {
    return this.validatingForm.get('modalFormRegisterRepeatPassword');
  }
}
