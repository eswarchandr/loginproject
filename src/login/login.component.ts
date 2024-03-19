import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [(NgModule)],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
public username = "";
public password = "";
login(){
  console.log(this.username,this.password);
}
}
