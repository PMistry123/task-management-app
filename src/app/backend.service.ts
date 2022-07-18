import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { delay, tap } from "rxjs/operators";

/**
 * This service acts as a mock backend.
 *
 * You are free to modify it as you see.
 */

export type User = {
  id: number;
  name: string;
  checked: boolean;
};

export type Task = {
  taskId: number,
  taskName: string,
  taskDescription: string,
  assigneeId: number,
  completed: boolean
};

function randomDelay() {
  return Math.random() * 1000;
}

@Injectable()
export class BackendService {
  taskList: Task[] = [
    {
      taskId: 0,
      taskName: "Do Testing",
      taskDescription: "Install a monitor arm",
      assigneeId: 0,
      completed: false
    },
    {
      taskId: 1,
      taskName: "Testing",
      taskDescription: "Install a monitor",
      assigneeId: 0,
      completed: false
    }
  ];
  // { taskId: uuidv4(), taskName: this.taskName, taskDescription: this.taskDescription, completed: false };
  // storedTasks: Task[] = [
  //   {
  //     id: 0,
  //     description: "Install a monitor arm",
  //     assigneeId: 111,
  //     completed: false
  //   },
  //   {
  //     id: 1,
  //     description: "Move the desk to the new location",
  //     assigneeId: 111,
  //     completed: false
  //   }
  // ];
  storedTasks: Task[] = [
    {
      taskId: 0,
      taskName: "Do Testing",
      taskDescription: "Install a monitor arm",
      assigneeId: 111,
      completed: false
    },
    {
      taskId: 1,
      taskName: "Do Testing",
      taskDescription: "Install a monitor arm",
      assigneeId: 111,
      completed: false
    }
  ];

  storedUsers: User[] = [
    { id: 111, name: "Mike", checked: false },
    { id: 222, name: "James", checked: false }
  ];

  lastId = 1;

  private findTaskById = id =>
    this.storedTasks.find(task => task.taskId === +id);

  private findUserById = id => this.storedUsers.find(user => user.id === +id);

  tasks() {
    return of(this.storedTasks).pipe(delay(randomDelay()));
  }

  task(id: any): Observable<Task> {
    return of(this.findTaskById(id)).pipe(delay(randomDelay()));
  }

  users() {
    return of(this.storedUsers).pipe(delay(randomDelay()));
  }

  userList() {
    return this.storedUsers;
  }
  user(id: number) {
    return of(this.findUserById(id)).pipe(delay(randomDelay()));
  }

  newTask(payload: { taskName: string, taskDescription: string }) {
    const newTask: Task = {
      taskId: ++this.lastId,
      taskName: payload.taskName,
      taskDescription: payload.taskDescription,
      assigneeId: 0,
      completed: false
    };

    this.taskList = this.taskList.concat(newTask);

    return of(newTask).pipe(delay(randomDelay()));
  }

  assign(taskId: number, userId: number) {
    return this.update(taskId, { assigneeId: userId });
  }

  complete(taskId: number, completed: boolean) {
    return this.update(taskId, { completed });
  }

  update(taskId: number, updates: Partial<Omit<Task, "id">>) {
    const foundTask = this.findTaskById(taskId);

    if (!foundTask) {
      return throwError(new Error("task not found"));
    }

    const updatedTask = { ...foundTask, ...updates };

    this.storedTasks = this.storedTasks.map(t =>
      t.taskId === taskId ? updatedTask : t
    );

    return of(updatedTask).pipe(delay(randomDelay()));
  }
}
