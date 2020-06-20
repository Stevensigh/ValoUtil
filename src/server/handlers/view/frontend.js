import { route } from 'supercharged/server';
import { HTTPHandler } from 'server/handlers/base';

@route(['/'])
export default class FrontendHandler extends HTTPHandler {
  get() {
    return this.ctx.logic.view.renderFrontend((err, html) => {
      if (err) {
        throw err;
      }

      this.res.setHeader('Content-Type', 'text/html');
      this.res.send(html);
    });
  }
}
