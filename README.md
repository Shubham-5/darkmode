# What is this ?

Get instant darkmode toggle code without writing .

# Installation

`npm install easy-darkmode-toggle --save`

Then...

...

import { Darkmode } from 'easy-darkmode-toggle'

const dark = new Darkmode('#App')

dark.toggle()

...

_EXAMPLE_

import { Darkmode } from 'easy-darkmode-toggle';

const dark = new Darkmode('body')

const btn = document.getElementByName('button');

btn.addEventListener('click', () => {

    dark.toggle()

})
