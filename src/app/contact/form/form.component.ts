import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as data from 'template/data.json';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  contact = (<any>data).english.contact;
  title = this.contact.title;
  nameError = this.contact.nameError;
  emailError = this.contact.emailError;
  emailFormatError = this.contact.emailFormatError;
  messageError = this.contact.messageError;
  messageLengthError = this.contact.messageLengthError;
  submit = this.contact.submit;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    alert('Demande envoyée');
  }
}
