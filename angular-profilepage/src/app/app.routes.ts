import { Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { Assign1Component } from './components/assign1/assign1.component';
import { Assign2Component } from './components/assign2/assign2.component';
export const routes: Routes = [

    {
        path:'app-body',
        component:BodyComponent
    },

    {
        path:'app-projects',
        component:ProjectsComponent
    },
    {
        path:'app-skills',
        component:SkillsComponent
    },
    {
        path:'assign1',
        component:Assign1Component
    },
    {
        path:'assign2',
        component:Assign2Component
    }
]