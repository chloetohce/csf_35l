import { Component } from '@angular/core';
import { Employee } from '../../model';

@Component({
  selector: 'app-list-employee',
  standalone: false,
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent {
  employees: Employee[] = [
    {name: 'Bartholomew Montgomery', email: 'barty@gmail.com'},
    {name: 'Fred Fred', email: 'fred2@gmail.com'},
    {name: 'Margot Robbie', email: 'margorobbo@hotmail.com'}
  ]

  
}
