import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    // Logic to handle form submission
    alert('Thank you for reaching out! I will get back to you soon.');
  }
}
