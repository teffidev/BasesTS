(() => {
  const fullName = (firstName: string, ...restArguments: string[]): string => {
    return `${firstName} ${restArguments.join(' ')}`;
  };
  const superman = fullName("Clark", "Joseph", "Kent");

  console.log({superman});
})();
