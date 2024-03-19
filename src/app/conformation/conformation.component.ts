import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-conformation',
  standalone: true,
  imports: [HomeComponent,SidenavComponent,HeaderComponent],
  templateUrl: './conformation.component.html',
  styleUrl: './conformation.component.css'
})
export class ConformationComponent {

}
