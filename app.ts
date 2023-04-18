(() => {
  //*Ejercicio Práctico #1
  //Tipos
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const existe: boolean = false;

  //Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];

  //Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones
  enum ForceLevel {
    acuaman = 0,
    batman = 1,
    flash = 5,
    superman = 100,
  }

  const fuerzaFlash: ForceLevel = ForceLevel.flash;
  const fuerzaSuperman: ForceLevel = ForceLevel.superman;
  const fuerzaBatman: ForceLevel = ForceLevel.batman;
  const fuerzaAcuaman: ForceLevel = ForceLevel.acuaman;

  //Retorno de funciones
  function activar_batiseñal(): string {
    return "activada";
  }

  function pedir_ayuda(): void {
    console.log("Auxilio");
  }

  //Aserciones de tipo
  const poder: any = "100";
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);

  //*Ejercicio Práctico #2
  //Funciones Básicas
  const sumar = (a: number, b: number): number => a + b;
  sumar(1, 2);

  const contar = (heroes: string[]): number => {
    return heroes.length;
  };

  const superHeroes: string[] = [
    "Flash",
    "Arrow",
    "Superman",
    "Linterna Verde",
  ];
  contar(superHeroes);

  //Parametros por defecto
  const llamarBatman = (llamar: boolean = true): void => {
    if (llamar) {
      console.log("Batiseñal activada");
    }
  };
  llamarBatman();

  //Rest?
  const unirHeroes = (...personas: string[]): string => {
    return personas.join(", ");
  };

  //Tipo función
  const noHaceNada = (
    numero: number,
    texto: string,
    booleano: boolean,
    arreglo: string[]
  ) => {};

  //Crear el tipo de función que acepte la función "noHaceNada"
  let noHaceNadaTampoco: (
    n: number,
    s: string,
    b: boolean,
    a: string[]
  ) => void;

  noHaceNadaTampoco = noHaceNada;
})();
