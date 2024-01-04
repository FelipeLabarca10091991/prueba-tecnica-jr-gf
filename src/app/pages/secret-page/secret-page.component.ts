import { Component } from '@angular/core';
import { User } from '../../auth/login/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-secret-page',
  templateUrl: './secret-page.component.html',
  styleUrl: './secret-page.component.css'
})
export class SecretPageComponent {
  errorMessage:string="";
  user?:User


constructor(private userService:UserService){
  this.userService.getUser(1).subscribe({
    next:(userData)=>{
      this.user=userData;
    },
    error:(e)=>{
      this.errorMessage=e;
    },
    complete:()=>{
      console.info("Todo ok")
    }
  })
}
}
