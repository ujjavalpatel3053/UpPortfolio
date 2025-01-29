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
        window.open('assets/Ujjaval_Patel_cv.pdf', '_blank');
    } else if (type === 'resume') {
        window.open('assets/Ujjaval_Patel_cv.pdf', '_blank');
    }
}
}
