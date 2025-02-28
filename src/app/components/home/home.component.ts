import { Component } from '@angular/core';
import jsonData from '../../../assets/countries.json'; 
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data: any[] = Array.from(jsonData);

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      country: this.fb.control<string>('Singapore')
    })
    console.log(this.data)
  }

  processForm() {
    console.log(this.form.value)
  }
}
