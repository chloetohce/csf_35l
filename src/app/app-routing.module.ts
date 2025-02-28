import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { RouteGuardService } from './service/route-guard.service';
import { TestComponent } from './components/test/test.component';
import { DeactivateGuardService } from './service/deactivate-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent}, // Should be placed at the top
  {path: 'employees', component: ListEmployeeComponent},
  {path: 'employees/create', component: CreateEmployeeComponent},
  {path: 'employees/update/:id', component: UpdateEmployeeComponent, canActivate: [RouteGuardService]},
  {path: 'test', component: TestComponent, canDeactivate: [DeactivateGuardService]},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
