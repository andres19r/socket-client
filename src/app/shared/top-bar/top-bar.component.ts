import { Component, signal } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  isConnected: boolean = false;

  constructor(private readonly socketService: SocketService) {
    this.socketService.getConnectionStatus().subscribe((value) => {
      this.isConnected = value;
    });
  }
}
