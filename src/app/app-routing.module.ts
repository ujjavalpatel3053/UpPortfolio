import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '@progress/kendo-angular-dateinputs';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = 
  [
    { path: 'header', component: HeaderComponent },
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    {path:'http://localhost:4200/',redirectTo:'',pathMatch:'full'},
    { path: 'Home', component:HomeComponent  },
    { path: 'About', component: AboutComponent },
    { path: 'Skills', component: SkillsComponent },
    { path: 'Projects', component: ProjectsComponent },
    { path: 'Contact', component: ContactsComponent }

  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
