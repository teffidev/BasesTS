(() => {
  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || "_____________"}`;
  };

  const name = fullName("Tony");

  console.log({ name });
})();
