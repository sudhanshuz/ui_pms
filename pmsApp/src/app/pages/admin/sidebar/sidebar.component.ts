import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  handleOptionClick(option: string) {
    console.log('Selected option:', option);
    // Add your logic here
  }
  
}
