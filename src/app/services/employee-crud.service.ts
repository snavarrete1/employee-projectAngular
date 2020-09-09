import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {

  constructor(public afs: AngularFirestore) { }

  /**
   * 
   * @param employeeFirstName 
   * @param employeeLastName 
   * @param employeeAddress 
   * @param employeeDOB 
   */

  create_employee(employeeFirstName,employeeLastName,employeeAddress,employeeDOB){
    return this.afs.collection('employee').add({
      employeeFirstName: employeeFirstName,
      employeeLastName: employeeLastName,
      employeeAddress: employeeAddress,
      employeeDOB: employeeDOB
    })
  }

  /**
   * 
   * 
   */
  retrieve_employee(){
    return this.afs.collection("employee").snapshotChanges();
  }

  update_employee(employeeId, employeeFirstName, employeeLastName,employeeAddress, employeeDOB){
    this.afs.doc('employee/' + employeeId).update({
      employeeFirstName: employeeFirstName,
      employeeLastName:  employeeLastName,
      employeeAddress: employeeAddress,
      employeeDOB: employeeDOB

    })
  }
/**
 * 
 * @param employeeId 
 */


  delete_employee(employeeId){
    this.afs.doc('employee/' + employeeId).delete()
  }
}
