import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/component/login.component';
import { RegisterComponent } from './register/component/register.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent, RegisterComponent],
})
export class DrivingappAccountModule {}
