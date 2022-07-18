import { Component, NgZone, OnInit } from '@angular/core';
import { BackendService } from './../../backend.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskComponent } from './../task/task.component';
import { AssignTaskComponent } from './../assign-task/assign-task.component';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  taskList: any = [];
  // tasks = this.backend.tasks();
  users = this.backend.users();
  dataSource = [];
  displayedColumns: string[] = ['taskName', 'taskDescription', 'assigneeId', 'taskStatus', "assignTask", "taskDetail"];
  constructor(private ngZone: NgZone, private router: Router, private backend: BackendService, private dialog: MatDialog) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.backend.taskList = this.taskList = JSON.parse(localStorage.getItem('taskArray'));
      this.taskList = this.backend.taskList;
  }
  
  assignTask(item) {
    const dialogRef = this.dialog.open(AssignTaskComponent, {
      width: '250px',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngZone.run(() => {
        // this.dataSource = this.taskList = JSON.parse(localStorage.getItem('taskArray'));
        console.log('The dialog was closed' + result);
      })
    });
  }
  navigate(componentName, taskDetail) {
    const navParams: NavigationExtras = {
      queryParams: taskDetail
    }
    this.router.navigate([componentName], navParams);
  }
  filterItems(event) {
    const searchTerm = event.target.value;
    this.backend.taskList = this.taskList.filter((item) => {
      if (item.taskName != null && item.taskDescription != null) {
        return (item.taskName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.taskName.includes(searchTerm) ||
          item.taskDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.taskDescription.includes(searchTerm))
      }
    })
  }
}
