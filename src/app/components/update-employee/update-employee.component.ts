import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: false,
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css',
})
export class UpdateEmployeeComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      name: this.fb.control<string>(''),
      email: this.fb.control<string>(''),
    });
  }

  ngOnInit(): void {
    const emp = {
      name: 'Test Employee',
      email: 'random@gmail.com'
    }
    this.form.patchValue(emp); //to populate form with data
    console.log(this.route.snapshot.queryParamMap);
    console.log(this.route.snapshot.paramMap)
  }

  protected processForm() {
    console.log(this.form.value);
    this.router.navigate(['/employees']);
  }
}
