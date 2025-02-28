import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { TestComponent } from './components/test/test.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouteGuardService } from './service/route-guard.service';
import { DeactivateGuardService } from './service/deactivate-guard.service';
import { DebounceComponent } from './components/debounce/debounce.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    HomeComponent,
    UpdateEmployeeComponent,
    TestComponent,
    DebounceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ 
    provideAnimationsAsync(),
    provideClientHydration(),
    RouteGuardService,
    DeactivateGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
