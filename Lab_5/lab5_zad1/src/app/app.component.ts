import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Member } from './member.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('membershipForm') memberForm: NgForm; // dekorator @ViewChild uzysku
  membershiptypes = ['Silver', 'Gold', 'Platinum'];
  currentDate = new Date();
  member = new Member('', '', new Date(), '');
  submitted = false;
  onSubmit() {
    this.submitted = true;
    this.member.name = this.memberForm.value.name;
    this.member.mail = this.memberForm.value.email;
    this.member.membershipDate = this.memberForm.value.mdate;
    this.member.membershipType = this.memberForm.value.type;
  }
}