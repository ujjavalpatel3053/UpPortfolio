import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isVisible = true; // Sidebar visibility state

  constructor() { }

  ngOnInit() {
    this.isVisible = false;
  }
  toggleSidebar() {
    this.isVisible = !this.isVisible; // Toggle the sidebar visibility
  }
}
