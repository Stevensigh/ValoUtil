# web-boilerplate

This project provides base configuration and boilerplate for a fully fledged client-server web application with a React SPA serving the frontend and a Supercharged-based HTTP server for the backend.

## Usage

### Forking a new project

```bash
$ git clone git@git.kevinlin.info:personal/web-boilerplate.git my-project
$ cd my-project
$ rm -rf .git && git init
```

### Development

```bash
$ npm install
$ cp config.example.yaml config.yaml
$ npm run dev
# This starts webpack-dev-server on port 3000.
# Changes to source are live-reloaded.
```

### Deployment

```bash
$ NODE_ENV=production npm run build
$ npm run release
# This creates a self-contained binary at dist/bin/web-boilerplate which can be deployed in any environment.
$ ./dist/bin/web-boilerplate --help
```
