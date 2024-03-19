import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HomeComponent,SidenavComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

}
