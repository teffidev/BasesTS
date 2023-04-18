(() => {
  const hero: string = "Flash";

  function returnName(): string {
    return hero;
  }

  const activateBatiSeñal = (): string => {
    return "Batiseñal Activada";
  };

  console.log(typeof activateBatiSeñal);

  const heroName = returnName();
})();
