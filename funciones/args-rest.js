"use strict";
(() => {
    const fullName = (firstName, ...restArguments) => {
        return `${firstName} ${restArguments.join(' ')}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman });
})();
