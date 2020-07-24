# hue-node

A Phillips Hue API Wrapper written in TypeScript

### Installation

npm
```
npm i hue-node
```

yarn
```
yarn add hue-node
```

### Usage

```js
import { Hue } from 'hue-node'

const hue = new Hue('username', 'bridge ip')

hue.getLights().then(function (response) {
    console.log(response);
})
```
