import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';
import { ChatMessage } from '../interfaces/chat.interface';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private isSocketConnected$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor(
    private socket: Socket,
    private userService: UserService,
  ) {
    this.socket.on('connect', () => {
      this.isSocketConnected$.next(true);
      console.log(`Client connected with id: ${this.socket.ioSocket.id}`);
    });

    this.socket.on('disconnect', () => {
      console.error('Disconnected from server');
      this.isSocketConnected$.next(false);
    });

    this.socket.on('connect_error', (error: any) => {
      console.error('Connection error', error);
      this.isSocketConnected$.next(false);
    });
  }

  getConnectionStatus(): Observable<boolean> {
    return this.isSocketConnected$.asObservable();
  }

  sendMessage(message: string) {
    this.socket.emit('chat', {
      user: this.userService.userName,
      content: message,
    });
  }

  receiveMessages(): Observable<ChatMessage> {
    return this.socket.fromEvent<ChatMessage>('server');
  }
}
