import ExampleHandler from 'server/handlers/api/example';
import HealthHandler from 'server/handlers/meta/health';
import FallbackHandler from 'server/handlers/view/fallback';
import FrontendHandler from 'server/handlers/view/frontend';

export default [
  // API
  ExampleHandler,
  // Meta
  HealthHandler,
  // Views
  FrontendHandler,
  FallbackHandler,
];
