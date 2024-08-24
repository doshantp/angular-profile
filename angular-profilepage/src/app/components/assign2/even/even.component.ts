import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GamecontrolComponent } from '../gamecontrol/gamecontrol.component';

@Component({
  selector: 'app-even',
  standalone: true,
  imports: [FormsModule,GamecontrolComponent],
  templateUrl: './even.component.html',
  styleUrl: './even.component.css'
})
export class EvenComponent {
  @Input() eventCount =0;
  displaynum = 0 ;
  evenCount = 0 ;

  ngOnChanges() {
    if (this.eventCount % 2 === 0) {
      this.displaynum=this.evenCount++;
    }
  }
  
}
