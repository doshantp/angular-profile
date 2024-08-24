import { Component,Output,EventEmitter, Input} from '@angular/core';
import { CompoAComponent } from '../compo-a/compo-a.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compo-b',
  standalone: true,
  imports: [CompoAComponent,FormsModule],
  templateUrl: './compo-b.component.html',
  styleUrl: './compo-b.component.css'
})
export class CompoBComponent {
  @Input() valueFromA = '' ;
  valueB = '';
  @Output() sendToA = new EventEmitter<string>();

  sendValueToA() {
    this.sendToA.emit(this.valueB);
  }
}
