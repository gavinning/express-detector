express-detector
---

### Install
```sh
npm i express-detector --save
```

### Usage
```js
var detector = require('express-detector');

app.use(detector());
```
```js
router.all('*', (req, res) => {
    console.log(req.env)
    // 是否跳转到移动端
    req.env.isMobile ? res.redirect('http://m.domain.com') : next();
})
```
console.log( req.env ) =>
```js
{
    device: {
        name: 'iphone',
        version: -1,
        fullVersion: '-1',
        iphone: -1
    },
    os: {
        name: 'ios',
        version: 9.1,
        fullVersion: '9.1',
        ios: 9.1
    },
    engine: {
        name: 'webkit',
        version: 601.1,
        fullVersion: '601.1.46',
        mode: 601.1,
        fullMode: '601.1.46',
        compatible: false,
        webkit: 601.1
    },
    browser: {
        name: 'safari',
        version: 9,
        fullVersion: '9.0',
        mode: 9,
        fullMode: '9.0',
        compatible: false,
        safari: 9
    },
    isPC: false,
    isMobile: true
}

```
