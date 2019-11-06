import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MDBModalRef, MDBModalService} from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './kontakt-modal.component.html',
  styleUrls: ['./kontakt-modal.component.scss']
})
export class KontaktModalComponent implements OnInit {

  validatingForm: FormGroup;

  successModal: MDBModalRef;

  constructor(public modalRef: MDBModalRef, private modalService: MDBModalService) {}

  ngOnInit() {
    this.validatingForm = new FormGroup({
      contactFormModalName: new FormControl('', Validators.required),
      contactFormModalEmail: new FormControl('', Validators.email),
      contactFormModalMessage: new FormControl('', Validators.required),
    });
  }

  onSend() {
    this.modalRef.hide();
  }

  get contactFormModalName() {
    return this.validatingForm.get('contactFormModalName');
  }

  get contactFormModalEmail() {
    return this.validatingForm.get('contactFormModalEmail');
  }

  get contactFormModalMessage() {
    return this.validatingForm.get('contactFormModalMessage');
  }
}
