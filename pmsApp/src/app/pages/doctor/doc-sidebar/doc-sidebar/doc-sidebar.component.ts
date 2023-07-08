import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-doc-sidebar',
  templateUrl: './doc-sidebar.component.html',
  styleUrls: ['./doc-sidebar.component.css']
})
export class DocSidebarComponent {

User:any={

};
constructor(_login:LoginService){
  this.User=_login.getUser();
  console.log(this.User);
}

}
