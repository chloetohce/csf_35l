import { Component } from '@angular/core';
import * as jsonData from '../../../assets/countries.json'; 

@Component({
  selector: 'app-test',
  standalone: false,
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  data: any = jsonData;

  canExit(): boolean {
    if (confirm('Do you wnat to leave this page?')) {
      return true;
    } else {
      return false;
    }
  }
}
