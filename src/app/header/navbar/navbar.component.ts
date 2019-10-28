import { Component, OnInit } from '@angular/core';
import {MDBModalRef, MDBModalService} from 'ng-uikit-pro-standard';
import {KontaktModalComponent} from '../../modal/kontakt-modal/kontakt-modal.component';
import {StandortModalComponent} from '../../modal/standort-modal/standort-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) { }

  openContact() {
    this.modalRef = this.modalService.show(KontaktModalComponent,   {
      class: 'modal-lg cascading-modal',

    });
  }

  openLocation() {
    this.modalRef = this.modalService.show(StandortModalComponent, {
      class: 'modal-dialog cascading-modal'
    });
  }

  ngOnInit() {
  }

}
