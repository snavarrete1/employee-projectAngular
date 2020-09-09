import { Component, OnInit } from '@angular/core';
import { EmployeeCrudService } from '../services/employee-crud.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.scss']
})
export class ShowEmployeeComponent implements OnInit {

  data;
  public show:boolean = false;

  constructor(public crudService: EmployeeCrudService) { }

  updateForm = new FormGroup({
    employeeFirstName:new FormControl('',[Validators.required, Validators.minLength(4)]),
    employeeLastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    employeeAddress: new FormControl('',[Validators.required,Validators.minLength(6)]),
    employeeDOB: new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  get employeeFirstName() {return this.updateForm.get('employeeFirstName')}


  get employeeLastName() {return this.updateForm.get('employeeLastName')}


  get employeeAddress() {return this.updateForm.get('employeeAddress')}


  get employeeDOB() {return this.updateForm.get('employeeDOB')}

  get employeeFirstNameValue() {return this.updateForm.get('employeeFirstName').value}

  get employeeLastNameValue() {return this.updateForm.get('employeeLastName').value}

  get employeeAddressValue() {return this.updateForm.get('employeeAddress').value}

  get employeeDOBValue() {return this.updateForm.get('employeeDOB').value}

  onSubmit(id,employeeFirstName,employeeLastName,employeeAddress,employeeDOB){
    this.crudService.update_employee(id,employeeFirstName,employeeLastName,employeeAddress,employeeDOB)
    console.log(`${this.updateForm.value.employeeFirstName}`)
  }

  toggle(){
    this.show = !this.show;
  }

  delete(id){
    this.crudService.delete_employee(id)
  }


  ngOnInit(): void {
    this.data = this.crudService.retrieve_employee().subscribe(data =>{
      this.data = data.map(rawData => {
        return {
          id: rawData.payload.doc.id,
          employeeFirstName: rawData.payload.doc.data()['employeeFirstName'],
          employeeLastName: rawData.payload.doc.data()['employeeLastName'],
          employeeAddress: rawData.payload.doc.data()['employeeAddress'],
          employeeDOB: rawData.payload.doc.data()['employeeDOB']

        }
      })
      console.log(this.data.id)
    })
  }

}
