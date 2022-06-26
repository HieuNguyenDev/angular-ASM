import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DulieuService {

  constructor( private http: HttpClient) { }

  // Projects
  getProjects() {
    return this.http.get('http://localhost:3000/projects');
  }

  addProject(project: any) {
    return this.http.post('http://localhost:3000/projects/', project);
  }

  deleteProject(id: number) {
    return this.http.delete('http://localhost:3000/projects/' + id);
  }

  editProject(project: any) {
    return this.http.put('http://localhost:3000/projects/' + project.id, project);
  }

  getIDProject(id: any) {
    return this.http.get('http://localhost:3000/projects/' + id);
  }

  // Tasks
  getTasks() {
    return this.http.get('http://localhost:3000/tasks');
  }

  addTask(task: any) {
    return this.http.post('http://localhost:3000/tasks', task);
  }

  deleteTask(id: number) {
    return this.http.delete('http://localhost:3000/tasks/' + id);
  }

  editTask(task: any) {
    return this.http.put('http://localhost:3000/tasks/' + task.id, task);
  }

  getIDTask(id: any) {
    return this.http.get('http://localhost:3000/tasks/' + id);
  }


  // Employees
  getEmployees() {
    return this.http.get('http://localhost:3000/employees');
  }
  
  addEmployee(employee: any) {
    return this.http.post('http://localhost:3000/employees', employee);
  }

  deleteEmployee(id: number) {
    return this.http.delete('http://localhost:3000/employees/' + id);
  }

  editEmployee(employee: any) {
    return this.http.put('http://localhost:3000/employees/' + employee.id, employee);
  }
  
  getIDEmployee(id: any) {
    return this.http.get('http://localhost:3000/employees/' + id);
  }
}
