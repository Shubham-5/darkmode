# What is this ?

Get instant darkmode toggle code without writing .

# Installation

`npm install darkmode --save`

Then...

...

import { darkmode } from 'darkmode';

const dark = new Darkmode('#App') // Enter any selector name you want to style

dark.toggle() // toggle() can enable darkmode in your app.

EXAMPLE :

import {darkmode} from 'darkmode';

const dark = new Darkmode('body'
)
const btn = document.getElementByName('button');

btn.addEventListener('click', ()=>{
dark.toggle()
})

...
