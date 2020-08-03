import { Hue } from '../lib'

const hue = new Hue('username', 'ip')

// number
hue.toggleLight(8).then(function (response) {
    console.log(response)
});
