import { route } from 'supercharged/server';
import { HTTPHandler } from 'server/handlers/base';

@route('/_/health')
export default class HealthHandler extends HTTPHandler {
  get() {
    return this.success({ message: 'OK' });
  }
}
