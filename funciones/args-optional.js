"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "_____________"}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
