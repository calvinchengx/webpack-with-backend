Hello Webpack
========================

1. `npm install`  
2. `npm start` (This runs webpack-dev-server and a simple nodejs express server); alternatively use `npm run start2` (which runs webpack-dev-server and a simple python server)
3. Visit http://localhost:7070 (or http://192.168.x.x:7070) on multiple devices
4. Edit entry.js and hit save
5. Watch the page updates itself across multiple devices

---

This demo opens up a "backend" server that serves index.html, which can be any web application in the real-world scenario. We use `--content-base-target` option (which is never documented and [will be deprecated soon](https://github.com/webpack/webpack-dev-server/pull/127)) to proxy requests that it can't handle to our backend server.

It is worth noting that we use neither the `--inline` option nor the `<script src="http://localhost:8080/webpack-dev-server.js"` here, because in the both case the socket.io client in the webpack-dev-server runtime tries to connect to localhost, even on 'remote' devices that webpack-dev-server does not run on. Instead, we specify 'webpack-dev-server/client?/' to be the output entry in order to instruct the webpack-dev-server runtime to connect to "/", which is hostname-agnostic and works across multiple devices.

`npm start` uses the `index.html` served by a nodejs express server. To demonstrate that this layout supports a language-agnostic backend, `npm run start2` uses a simple python server.
