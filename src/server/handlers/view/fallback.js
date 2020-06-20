import { route } from 'supercharged/server';
import FrontendHandler from 'server/handlers/view/frontend';

@route('*')
export default class FallbackHandler extends FrontendHandler {
  get() {
    this.res.status(404);
    return super.get();
  }
}
