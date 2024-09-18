import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  userName: string = '';

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
  ) {}

  public get userNameService(): string {
    return this.userService.userName;
  }

  onSubmit() {
    if (!this.userName.trim()) return;

    this.userService.userName = this.userName;
    this.router.navigateByUrl('chat');
  }
}
