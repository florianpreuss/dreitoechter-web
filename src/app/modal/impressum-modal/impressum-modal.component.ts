import { Component, OnInit } from '@angular/core';
import {MDBModalRef} from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-impressum-modal',
  templateUrl: './impressum-modal.component.html',
  styleUrls: ['./impressum-modal.component.scss']
})
export class ImpressumModalComponent implements OnInit {

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

}
