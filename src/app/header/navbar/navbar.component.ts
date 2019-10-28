import { Component, OnInit } from '@angular/core';
import {MDBModalRef, MDBModalService} from 'ng-uikit-pro-standard';
import {KontaktModalComponent} from '../../modal/kontakt-modal/kontakt-modal.component';

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
      containerClass: 'modal fade top',
    });
  }

  ngOnInit() {
  }

}
