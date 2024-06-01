import { Server, Socket } from 'socket.io';
import { IMessageLocals, SocketApi } from './@types/socket-sender.type';
import http from 'http';
import { logger } from './logger';

export class SocketNotificationEmailApi implements SocketApi {
  private io: Server;

  constructor() {
    const server = http.createServer();
    this.io = new Server(server);
    this.listen();
  }

  private async listen(): Promise<void> {
    try {
      this.io.on('connection', (socket: Socket) => {
        logger.info(`Socket ${socket.id} connected`);
        this.disconnect(socket);
      });
    } catch (error: unknown) {
      throw error;
    }
  }

  private async disconnect(socket: Socket): Promise<void> {
    try {
      socket.on('disconnect', () => {
        logger.info(`Socket ${socket.id} disconnected`);
      });
    } catch (error: unknown) {
      throw error;
    }
  }

  async sendNotification(
    template: string,
    receiver: string,
    locals: IMessageLocals
  ): Promise<void> {
    try {
      // You may want to emit to a specific room or namespace based on receiver.
      this.io.emit(template, locals);
    } catch (error: unknown) {
      throw error;
    }
  }
}
