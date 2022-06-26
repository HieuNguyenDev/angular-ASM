import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaoveGuard } from './baove.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { NvListComponent } from './nv-list/nv-list.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list-project', component: DuanListComponent, canActivate:[BaoveGuard] },
  { path: 'add-project', component: DuanThemComponent, canActivate:[BaoveGuard] },
  { path: 'list-project/edit-project/:id', component: DuanSuaComponent, canActivate:[BaoveGuard] },
  { path: 'list-task', component: TaskListComponent, canActivate:[BaoveGuard] },
  { path: 'add-task', component: TaskThemComponent, canActivate:[BaoveGuard] },
  { path: 'list-task/edit-task/:id', component: TaskSuaComponent, canActivate:[BaoveGuard] },
  { path: 'list-employee', component: NvListComponent, canActivate:[BaoveGuard] },
  { path: 'add-employee', component: NvThemComponent, canActivate:[BaoveGuard] },
  { path: 'list-employee/edit-employee/:id', component: NvSuaComponent, canActivate:[BaoveGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

