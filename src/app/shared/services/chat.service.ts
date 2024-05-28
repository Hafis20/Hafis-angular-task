import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  public joinRoom(data:string){
    this.socket.emit('join',data);
  }

  public sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  public listMessage() {
    return this.socket.fromEvent('recieved').pipe(map((data) => data));
  }
}
