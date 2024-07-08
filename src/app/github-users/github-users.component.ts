import { UserInfoModule } from './../user-info/user-info.interface';
import { Component } from '@angular/core';
import { UserInfoService } from '../user-info/user-info.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrl: './github-users.component.css'
})
export class GithubUsersComponent {
  // userserv:UserInfoService;
  //  = new UserInfoService();
  input:string = '';
  data:any = {};
  constructor(private userInfoService: UserInfoService) {

  }
  search() {
    this.userInfoService.getInformation(this.input).subscribe((data) => {
      this.data = data;

    });
  }
}
