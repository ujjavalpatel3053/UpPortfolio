import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openDocument(type) {
    if (type === 'biodata') {
        window.open('assets/Regularity%20Report_09102024_113932415.pdf', '_blank');
    } else if (type === 'resume') {
        window.open('assets/Regularity%20Report_09102024_113932415.pdf', '_blank');
    }
}
}
