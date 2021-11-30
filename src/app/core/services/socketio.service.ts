import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketioService {
  private socket: Socket;

  constructor() {
    this.socket = io(environment.coinapi_socket_api, {
      reconnectionDelayMax: 10000,
      auth: {
        apikey: environment.coin_api_key
      },
    });
    this.socket.on("Hello", () => {
      console.log(this.socket.connected); // true
      console.log(this.socket.id); // x8WIv7-mJelg7on_ALbx
    });
  }

  setupSocketConnection() {
    // this.socket = io(environment.SOCKET_ENDPOINT);
  }

  // EMITTER
  sendMessage(msg: string) {
    this.socket.emit('hello', { message: msg });
  }

  // HANDLER
  onNewMessage() {
    console.log( this.socket);


    // return new Observable((observer) => {
      // this.socket.on('hello', (msg: any) => {
      //   // observer.next(msg);
      //   console.log(this.socket.connected); // true
      // });

      // this.socket.on('hearbeat', (msg: any) => {
      //   // observer.next(msg);
      //   console.log(this.socket.connected); // true
      // });
      // this.socket.emit('hearbeat', { message: 'msg' });
    // });
  }
}
