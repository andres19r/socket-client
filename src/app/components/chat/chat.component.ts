import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../../interfaces/chat.interface';
import { SocketService } from '../../services/socket.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  message: string = '';
  serverMessages: ChatMessage[] = [];

  constructor(
    private readonly socketService: SocketService,
    private readonly userService: UserService,
  ) {}

  get userName(): string {
    return this.userService.userName;
  }

  ngOnInit(): void {
    this.socketService.receiveMessages().subscribe((message) => {
      this.serverMessages.push(message);
    });
  }

  sendMessage() {
    if (!this.message.trim()) return;

    this.socketService.sendMessage(this.message);
    this.message = '';
  }
}
