# What is this ?

Get instant darkmode toggle code without writing .

# Installation

`npm install Darkmode --save`

Then...

...

import { Darkmode } from 'Darkmode';

const dark = new Darkmode('#App')

dark.toggle()

...

_EXAMPLE_

import { Darkmode } from 'Darkmode';

const dark = new Darkmode('body')

const btn = document.getElementByName('button');

btn.addEventListener('click', () => {

    dark.toggle()

})
