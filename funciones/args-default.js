"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || "_____________"}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || "_____________"}`;
        }
    };
    const name = fullName("Tony", "Stark", true);
    console.log({ name });
})();
