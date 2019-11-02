import { Component, OnInit } from '@angular/core';
import {MDBModalRef, MDBModalService} from 'ng-uikit-pro-standard';
import {KontaktModalComponent} from '../../modal/kontakt-modal/kontakt-modal.component';
import {ImpressumModalComponent} from '../../modal/impressum-modal/impressum-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  contactModalRef: MDBModalRef;
  standortModalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) { }

  openContact() {
    this.contactModalRef = this.modalService.show(KontaktModalComponent,   {
      class: 'modal-lg cascading-modal',
      containerClass: 'modal fade top',
    });
  }

  openImpressum() {
    this.standortModalRef = this.modalService.show(ImpressumModalComponent,   {
      class: 'modal-lg',
      containerClass: 'modal fade top',
    });
  }

  ngOnInit() {
  }

}
