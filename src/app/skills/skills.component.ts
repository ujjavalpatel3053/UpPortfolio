import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  skills = [
    { name: 'Angular', image: 'assets/angular.png',desciption:'A powerful front-end framework for building dynamic, single-page web applications with ease and scalability.' },
    { name: 'TypeScript', image: 'assets/typescript.png',desciption:' A superset of JavaScript that adds static typing, making code more predictable and easier to maintain.' },
    { name: 'JavaScript', image: 'assets/javascript.png',desciption:'The essential programming language for web development, enabling interactivity and dynamic content in web applications.' },
    { name: 'HTML5', image: 'assets/html5.png',desciption:'The latest standard for HyperText Markup Language, providing the structure for web pages with enhanced multimedia support.' },
    { name: 'CSS3', image: 'assets/css3.png',desciption:'The style sheet language that describes the presentation of a web page, allowing for sophisticated designs and layouts.' },
    { name: 'ASP.NET', image: 'assets/aspnet.jfif',desciption:'A framework for building robust web applications and services, leveraging the power of the .NET ecosystem.    ' },
    { name: 'PostgreSQL', image: 'assets/postgresql.png',desciption:'An advanced, open-source relational database known for its reliability, robustness, and support for complex queries.' },
    { name: 'Git', image: 'assets/git.png',desciption:'A distributed version control system that tracks changes in source code, enabling collaborative development and version management.' },
    { name: 'DevOps', image: 'assets/devops.png' ,desciption:' A set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and improve deployment frequency.'},
  ];
}
