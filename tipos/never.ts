(() => {
    const error = (msg: string): never => {
        throw new Error(msg);
    };
    error('SOS');
    console.log('Hola Mundo');
    


})()