import { Hue } from '../lib'

const hue = new Hue('username', 'ip')

// number, hue, satuation, brightness
hue.changeColor(8, 270, 200, 200).then(function (response) {
    console.log('Color changed')
});