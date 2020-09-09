import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.scss']
})
export class EmployeeHomeComponent implements OnInit {

  

  title = 'Employee Project';

  displayLanguage(){
    console.log('Typescript in use for Angular')
  }


  constructor() { }

  ngOnInit(): void {
  }

}
