import { ServerWebSocket } from 'bun';
import { TSchema, t } from 'elysia';
import { TypeCheck } from 'elysia/dist/type-system';
import { ElysiaWS } from 'elysia/dist/ws';

type WebSocket = ElysiaWS<ServerWebSocket<{ validator?: TypeCheck<TSchema> }>, any, any>;

export default class FooBar {
  private sockets = new Set<WebSocket>();

  constructor() {
    this.sockets.forEach((socket) => {
      console.log(socket);
    });
  }
}
