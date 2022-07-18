import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';
import { BackendService } from './../../backend.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  data: any = {};
  taskName: any = "";
  taskDescription: any = "";
  taskDetail: any;
  taskArray: any = [];
  error: boolean = false;
  constructor(private backend: BackendService, public dialogRef: MatDialogRef<TaskComponent>) { }
  ngOnInit(): void {
    console.log("Page Initialization done")
  }
  submit(event) {
    if (this.taskName == null || this.taskDescription == null || this.taskName == "" || this.taskDescription == '') {
      this.error = true;
      return;
    }
    else {
      this.error = false
      this.taskArray = JSON.parse(localStorage.getItem('taskArray')) || [];
      this.taskDetail = { taskId: uuidv4(), taskName: this.taskName, taskDescription: this.taskDescription, completed: false };
      this.backend.newTask({ taskName: this.taskName, taskDescription: this.taskDescription });
      // this.taskArray.push(this.taskDetail)
      localStorage.setItem("taskArray", JSON.stringify(this.taskArray));
      this.dialogRef.close("Thanks" + event)
    }

  }
  thanks(event) {
    this.dialogRef.close('Thanks' + event)
  }
}
