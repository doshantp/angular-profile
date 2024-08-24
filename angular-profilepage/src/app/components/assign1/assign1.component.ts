import { Component } from '@angular/core';
import { CompoAComponent } from './compo-a/compo-a.component';

@Component({
  selector: 'app-assign1',
  standalone: true,
  imports: [CompoAComponent],
  templateUrl: './assign1.component.html',
  styleUrl: './assign1.component.css'
})
export class Assign1Component {

}
