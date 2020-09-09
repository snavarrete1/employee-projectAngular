import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { EmployeeCrudService } from '../services/employee-crud.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.scss']
})
export class EmployeeLoginComponent implements OnInit {

  employeeForm = new FormGroup({
    employeeFirstName:new FormControl('',[Validators.required, Validators.minLength(4)]),
    employeeLastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    employeeAddress: new FormControl('',[Validators.required,Validators.minLength(6)]),
    employeeDOB: new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  get employeeFirstName() {return this.employeeForm.get('employeeFirstName')}


  get employeeLastName() {return this.employeeForm.get('employeeLastName')}


  get employeeAddress() {return this.employeeForm.get('employeeAddress')}


  get employeeDOB() {return this.employeeForm.get('employeeDOB')}

  onSubmit(){
    this.crudService.create_employee(this.employeeForm.value.employeeFirstName,this.employeeForm.value.employeeLastName,this.employeeForm.value.employeeAddress,this.employeeForm.value.employeeDOB)
    console.log(`${this.employeeForm.value.employeeFirstName}`)
  }
  constructor(public crudService: EmployeeCrudService) { }

  ngOnInit(): void {
  }

}
