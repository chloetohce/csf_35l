import { Component, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-create-employee',
  standalone: false,
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {

  form: FormGroup;

  @Output() newEmployee = new Subject<Employee>();
  
  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: this.fb.control<string>(''),
      email: this.fb.control<string>(''),
    })
  }

  protected processForm() {
    console.log(this.form.value)
    this.router.navigate(['/employees'])
  }
}
