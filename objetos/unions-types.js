"use strict";
(() => {
    let myCustomeVariable = "Estefania";
    console.log(typeof myCustomeVariable);
    myCustomeVariable = 20;
    console.log(typeof myCustomeVariable);
    myCustomeVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    };
    console.log(myCustomeVariable);
})();
