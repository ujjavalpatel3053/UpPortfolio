import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  projects = [
    {
      title: 'Project 1',
      description: 'A brief description of project 1.',
      image: 'assets/project1.jpg', 
      liveDemo: 'https://ujjavalpatel3053.github.io/UpPortfolio/', 
      github: 'https://github.com/ujjavalpatel3053' 
    },
    {
      title: 'Project 2',
      description: 'A brief description of project 2.',
      image: 'assets/project2.jpg',
      liveDemo: 'https://ujjavalpatel3053.github.io/UpPortfolio/', 
      github: 'https://github.com/ujjavalpatel3053'
    },
    {
      title: 'Project 3',
      description: 'A brief description of project 3.',
      image: 'assets/project3.jpg',
      liveDemo: 'https://ujjavalpatel3053.github.io/UpPortfolio/', 
      github: 'https://github.com/ujjavalpatel3053' 
    },
    {
      title: 'Project 4',
      description: 'A brief description of project 4.',
      image: 'assets/project4.jpg',
      liveDemo: 'https://ujjavalpatel3053.github.io/UpPortfolio/', 
      github: 'https://github.com/ujjavalpatel3053' 
    },
    {
      title: 'Project 5',
      description: 'A brief description of project 5.',
      image: 'assets/project5.jpg',
      liveDemo: 'https://ujjavalpatel3053.github.io/UpPortfolio/', 
      github: 'https://github.com/ujjavalpatel3053' 
    },
    {
      title: 'Project 6',
      description: 'A brief description of project 6.',
      image: 'assets/project6.jpg',
      liveDemo: 'https://ujjavalpatel3053.github.io/UpPortfolio/', 
      github: 'https://github.com/ujjavalpatel3053' 
    }
  ];
}
