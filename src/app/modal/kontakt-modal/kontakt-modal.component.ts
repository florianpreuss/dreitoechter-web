import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IMyOptions, MDBModalRef, MDBModalService, TabsetComponent} from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './kontakt-modal.component.html',
  styleUrls: ['./kontakt-modal.component.scss']
})
export class KontaktModalComponent implements OnInit {

  @ViewChild('staticTabs', { static: true }) staticTabs: TabsetComponent;

  validatingMessageForm: FormGroup;
  validatingMeetingForm: FormGroup;

  btnSendMessageDisabled = false;

  constructor(private modalService: MDBModalService) {}

  ngOnInit() {
    this.validatingMessageForm = new FormGroup({
      messageFormModalName: new FormControl('', Validators.required),
      messageFormModalEmail: new FormControl('', Validators.email),
      messageFormModalMessage: new FormControl('', Validators.required),
    });
    this.validatingMeetingForm = new FormGroup({
      meetingFormModalName: new FormControl('', Validators.required),
      meetingFormModalEmail: new FormControl('', Validators.email),
      meetingFormModalDate: new FormControl('', Validators.required),
      meetingFormModalTime: new FormControl('', Validators.required),
    });
  }

  onSend() {
/*    if (this.contactFormModalName || this.contactFormModalEmail.invalid || this.contactFormModalMessage.invalid) {
      this.btnSendMessageDisabled = true;
      return;
    }*/
  }

  onMessage() {
    this.staticTabs.setActiveTab(2);
  }

  onMeeting() {
    this.staticTabs.setActiveTab(3);
  }

  get messageFormModalName() {
    return this.validatingMessageForm.get('messageFormModalName');
  }

  get messageFormModalEmail() {
    return this.validatingMessageForm.get('messageFormModalEmail');
  }

  get messageFormModalMessage() {
    return this.validatingMessageForm.get('messageFormModalMessage');
  }


  get meetingFormModalName() {
    return this.validatingMessageForm.get('meetingFormModalName');
  }

  get meetingFormModalEmail() {
    return this.validatingMessageForm.get('meetingFormModalEmail');
  }

  get meetingFormModalDate() {
    return this.validatingMessageForm.get('meetingFormModalDate');
  }

  get meetingFormModalTime() {
    return this.validatingMessageForm.get('meetingFormModalTime');
  }
}
