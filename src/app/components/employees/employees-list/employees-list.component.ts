import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {
      id: '1',
      name: 'Mark',
      email: 'mark@gmail.com',
      phone: 1234567890,
      salary: 10000,
      department: 'IT'
    },
    {
      id: '2',
      name: 'Mark 2',
      email: 'mark@gmail.com',
      phone: 1234567890,
      salary: 10000,
      department: 'IT'
    },
    {
      id: '3',
      name: 'Mark 3',
      email: 'mark@gmail.com',
      phone: 1234567890,
      salary: 10000,
      department: 'IT'
    },
    {
      id: '4',
      name: 'Mark 4',
      email: 'mark@gmail.com',
      phone: 1234567890,
      salary: 10000,
      department: 'IT'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  
  }

}
