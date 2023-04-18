"use strict";
(() => {
    //*Ejercicio Práctico #1
    //Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    //Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    //Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    let ForceLevel;
    (function (ForceLevel) {
        ForceLevel[ForceLevel["acuaman"] = 0] = "acuaman";
        ForceLevel[ForceLevel["batman"] = 1] = "batman";
        ForceLevel[ForceLevel["flash"] = 5] = "flash";
        ForceLevel[ForceLevel["superman"] = 100] = "superman";
    })(ForceLevel || (ForceLevel = {}));
    const fuerzaFlash = ForceLevel.flash;
    const fuerzaSuperman = ForceLevel.superman;
    const fuerzaBatman = ForceLevel.batman;
    const fuerzaAcuaman = ForceLevel.acuaman;
    //Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio");
    }
    //Aserciones de tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
    //*Ejercicio Práctico #2
    //Funciones Básicas
    const sumar = (a, b) => a + b;
    sumar(1, 2);
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = [
        "Flash",
        "Arrow",
        "Superman",
        "Linterna Verde",
    ];
    contar(superHeroes);
    //Parametros por defecto
    const llamarBatman = (llamar = true) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    //Rest?
    const unirHeroes = (...personas) => {
        return personas.join(", ");
    };
    //Tipo función
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    //Crear el tipo de función que acepte la función "noHaceNada"
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
