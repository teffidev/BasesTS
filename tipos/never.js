"use strict";
(() => {
    const error = (msg) => {
        throw new Error(msg);
    };
    error('SOS');
    console.log('Hola Mundo');
})();
