'use strict'


function getRandomeId(length=7) {
    var txt = '';
    var txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(var i=0; i < length; i++) {
        txt += txt.charAt(Math.floor(Math.random() * txt.length));
    }
    return txt;
}



