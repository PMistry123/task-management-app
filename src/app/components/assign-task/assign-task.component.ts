import { Component, OnInit } from '@angular/core';
import { BackendService } from './../../backend.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {
  userList: any = [];
  selecteduserId: any;
  constructor(private snackBar: MatSnackBar, private backend: BackendService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<AssignTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  async ngOnInit() {
    this.userList = await this.backend.userList();
    console.log("User List" + this.userList)
  }
  updateAllComplete(event, _id) {
    if (event.checked)
      this.selecteduserId = event.source.value;
  }
  thanks(event) {
    this.dialogRef.close(event);
  }
  submit(event) {

    if (this.selecteduserId != undefined || this.selecteduserId != null) {
      this.backend.taskList.filter((task) => {
        if (this.data.taskId == task.taskId) {
          task.assigneeId = this.selecteduserId;
        }
      })
      this.dialogRef.close(event);
    }
    else {
      this.snackBar.open("Please select User to assign the task");
      return false;
    }
  }

}
