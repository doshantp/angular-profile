import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { PersonalinfoComponent } from './components/personalinfo/personalinfo.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

export const routes: Routes = [
    
    {
        path:'',
        component:BodyComponent
    },
    {
        path:'app-body',
        component:BodyComponent
    },
    {
        path:'app-personalinfo',
        component:PersonalinfoComponent
    },
    {
        path:'app-projects',
        component:ProjectsComponent
    },
    {
        path:'app-skills',
        component:SkillsComponent
    }
];
