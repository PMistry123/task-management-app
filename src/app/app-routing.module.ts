import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskComponent } from './components/task/task.component';
const routes: Routes = [
    { path: 'task', component: TaskComponent },
    // { path: 'taskDetail/:id', component: TaskDetailComponent },
    { path: 'taskDetail', component: TaskDetailComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', component: DashboardComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {


}