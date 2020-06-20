import {
  HTTPHandler as SuperchargedHTTPHandler,
  WebSocketHandler as SuperchargedWebSocketHandler,
} from 'supercharged/server';

export class HTTPHandler extends SuperchargedHTTPHandler {
  constructor(req, res, ctx) {
    super(req, res);

    this.ctx = ctx;
  }
}

export class WebSocketHandler extends SuperchargedWebSocketHandler {
  constructor(req, ws, ctx) {
    super(req, ws);

    this.ctx = ctx;
  }
}
