import { Component } from '@angular/core';
import { BackendService } from './backend.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskComponent } from './components/task/task.component';
import { AssignTaskComponent } from './components/assign-task/assign-task.component';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskList: any = [];
  title = "Hiring Test";
  // tasks = this.backend.tasks();
  users = this.backend.users();
  dataSource = [];
  displayedColumns: string[] = ['taskId', 'taskName', 'taskDescription', 'taskStatus', "assignTask", "taskDetail"];
  constructor(private router: Router, private backend: BackendService, private dialog: MatDialog) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataSource = this.taskList = JSON.parse(localStorage.getItem('taskArray'));
  }

  openTask(): void {
    const dialogRef = this.dialog.open(TaskComponent, {
      width: '250px',
      //data: { name: "", animal: "" },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
    });
  }
  assignTask(item) {
    const dialogRef = this.dialog.open(AssignTaskComponent, {
      width: '250px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
    });
  }

}
