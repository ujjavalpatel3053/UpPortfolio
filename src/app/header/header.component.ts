import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isVisible = true; 

  constructor(private router:Router) { }

  ngOnInit() 
  {
    this.isVisible = false; 
  }
  toggleSidebar() 
  {
    this.isVisible = !this.isVisible;
  }
  // logout() {
  //   this.router.navigate(['Home']);
  // }
}
