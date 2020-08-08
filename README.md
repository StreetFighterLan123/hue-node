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

### Functions / Documentation

#### Get all lights
```js 
hue.getLights()
```

#### Get a light
```js
// args: light id
hue.getLight(4)
```

##### Toggle a light
```js
// args: light id
hue.toggleLight(4)
```

##### Change Hue, Saturation, Brightness
```js
// args: light id, hue, saturation, brightnesss
hue.changeColor(4, 50, 100, 200)
````