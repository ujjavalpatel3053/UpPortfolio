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
      //liveDemo: 'https://example.com/project1', 
      //github: 'https://github.com/username/project1' 
    },
    {
      title: 'Project 2',
      description: 'A brief description of project 2.',
      image: 'assets/project2.jpg',
      //liveDemo: 'https://example.com/project2',
     // github: 'https://github.com/username/project2'
    },
    {
      title: 'Project 3',
      description: 'A brief description of project 3.',
      image: 'assets/project3.jpg',
      //liveDemo: 'https://example.com/project3',
      //github: 'https://github.com/username/project3'
    },
    {
      title: 'Project 4',
      description: 'A brief description of project 4.',
      image: 'assets/project4.jpg',
      //liveDemo: 'https://example.com/project3',
      //github: 'https://github.com/username/project3'
    },
    {
      title: 'Project 5',
      description: 'A brief description of project 5.',
      image: 'assets/project5.jpg',
      //liveDemo: 'https://example.com/project3',
      //github: 'https://github.com/username/project3'
    },
    {
      title: 'Project 6',
      description: 'A brief description of project 6.',
      image: 'assets/project6.jpg',
      //liveDemo: 'https://example.com/project3',
      //github: 'https://github.com/username/project3'
    }
  ];
}
