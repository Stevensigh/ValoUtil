import { route } from 'supercharged/server';
import { HTTPHandler } from 'server/handlers/base';

@route('/api/example')
export default class ExampleHandler extends HTTPHandler {
  get() {
    return this.ctx.logic.example.foo((err, resp) => (err ? this.error(err) : this.success(resp)));
  }
}
