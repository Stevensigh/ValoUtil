import BaseLogic from 'server/logic/base';

/**
 * Example logic module.
 */
export default class ExampleLogic extends BaseLogic {
  foo(cb) {
    this.ctx.log.info('example: executing foo logic');

    return cb(null, {
      data: 'bar',
    });
  }
}
