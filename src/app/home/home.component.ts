import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'Welcome to My Portfolio';
  introduction = 'I am a passionate software developer with expertise in creating modern web applications.';
  features = [
    'Responsive Designs',
    'User-Centric Applications',
    'Innovative Solutions',
    'Continuous Learning',
    'Cross-Browser Compatibility',
    'Optimized Performance',
    'SEO-Friendly Development',
    'Real-Time Data Visualization',
    'Interactive Animations',
    'Progressive Web Apps (PWAs)',
  ];
}
