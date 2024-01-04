import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../auth/login/user';
import { UserService } from '../../services/user/user.service';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  flowingData?:User;
  isLogIn:boolean=false;

  constructor(private loginService:LoginService){}

  ngOnInit(): void {
    this.loginService.isLogIn.subscribe({
      next:(isLogIn)=>{
        this.isLogIn=isLogIn;
      }
    })

    this.loginService.flowingData.subscribe({
      next:(flowingData)=> {
          this.flowingData=flowingData;
      },
    })
  }



}
