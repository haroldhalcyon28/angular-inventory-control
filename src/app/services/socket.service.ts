import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
 public socket = io('http://192.168.1.197:8080', {
    reconnect: true,
    transports: ['websocket'],
  });
  constructor() { }

}
