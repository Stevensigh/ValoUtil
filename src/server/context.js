import winston from 'winston';
import ConfigClient from 'server/clients/config';
import ExampleLogic from 'server/logic/example';
import ViewLogic from 'server/logic/view';

/**
 * Server-side context shared by all incoming request handlers.
 */
export default class Context {
  constructor(options) {
    this.config = new ConfigClient(options.config);

    this.logic = {
      example: new ExampleLogic(this),
      view: new ViewLogic(this),
    };

    this.log = winston.createLogger({
      level: options.verbosity,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.splat(),
        winston.format.printf((fmt) =>
          `${fmt.timestamp} ${fmt.level.toUpperCase()}\t${fmt.message}`),
      ),
      transports: [
        new winston.transports.Console({
          timestamp: () => Date.now(),
        }),
      ],
    });
  }
}
