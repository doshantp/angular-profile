import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-odd',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css'
})
export class OddComponent {
  @Input() eventCount: number = 0;
  oddCount = 0;

  ngOnChanges() {
    if (this.eventCount % 2 !== 0) {
      this.oddCount++;
    }
  }
}



 