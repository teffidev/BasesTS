(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${firstName} ${lastName || "_____________"}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || "_____________"}`;
    }
  };

  const name = fullName("Tony", "Stark", true);

  console.log({ name });
})();
