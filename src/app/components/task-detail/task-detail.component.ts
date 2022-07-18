import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  contact: any;
  taskList: any;
  taskDetail: any;
  constructor(private router: Router, private backendService: BackendService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      this.taskDetail = param;
    })
    console.log("Task Detail" + this.taskDetail)
  }
}

