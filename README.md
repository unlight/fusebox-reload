fusebox-reload
==============

[![Greenkeeper badge](https://badges.greenkeeper.io/unlight/fusebox-reload.svg)](https://greenkeeper.io/)
FuseBox Loader Plugin which do livereload on demand.

INSTALL
---
```
npm i -D fusebox-reload
```

USAGE
---
###### In your first entry point (usualy `main.js`) add something like:
```js
// @if devMode
import 'fusebox-reload';
// @endif
```

Or:
```js
if (process.env.NODE_ENV === 'development') {
    require('fusebox-reload');
}
```
###### In your task runner, do something like:
```js
const ds = fuseBox({ config }).devServer(`>main.ts`, {
    port: config.socketPort,
    httpServer: false,
    emitter: (self, fileInfo) => {
        if (fileInfo.path === 'index.html') {
            setTimeout(() => self.socketServer.send('source-changed', {type: 'reload'}), 200);
        } else {
            self.socketServer.send('source-changed', fileInfo);
        }
    }
});
```

Or:
```js
ds.socketServer.send('source-changed', {type: 'reload'});
```
