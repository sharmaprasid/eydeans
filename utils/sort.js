const sortAccountTypes = (accounts, selectedSort) => {
  switch (selectedSort) {
    case "max-interest":
      return accounts.sort(
        (a, b) =>
          parseFloat(
            b.attributes.find((attr) => attr.title === "Interest Rate").value
          ) -
            parseFloat(
              a.attributes.find((attr) => attr.title === "Interest Rate").value
            ) ||
          convertAndCompare(
            b.attributes.find((attr) => attr.title === "Minimum Balance").value
          ) -
            convertAndCompare(
              a.attributes.find((attr) => attr.title === "Minimum Balance")
                .value
            )
      );
    case "min-interest":
      return accounts.sort(
        (a, b) =>
          parseFloat(
            a.attributes.find((attr) => attr.title === "Interest Rate").value
          ) -
            parseFloat(
              b.attributes.find((attr) => attr.title === "Interest Rate").value
            ) ||
          convertAndCompare(
            a.attributes.find((attr) => attr.title === "Minimum Balance").value
          ) -
            convertAndCompare(
              b.attributes.find((attr) => attr.title === "Minimum Balance")
                .value
            )
      );
    case "max-balance":
      return accounts.sort(
        (a, b) =>
          convertAndCompare(
            b.attributes.find((attr) => attr.title === "Minimum Balance").value
          ) -
            convertAndCompare(
              a.attributes.find((attr) => attr.title === "Minimum Balance")
                .value
            ) ||
          parseFloat(
            b.attributes.find((attr) => attr.title === "Interest Rate").value
          ) -
            parseFloat(
              a.attributes.find((attr) => attr.title === "Interest Rate").value
            )
      );
    case "min-balance":
      return accounts.sort(
        (a, b) =>
          convertAndCompare(
            a.attributes.find((attr) => attr.title === "Minimum Balance").value
          ) -
            convertAndCompare(
              b.attributes.find((attr) => attr.title === "Minimum Balance")
                .value
            ) ||
          parseFloat(
            a.attributes.find((attr) => attr.title === "Interest Rate").value
          ) -
            parseFloat(
              b.attributes.find((attr) => attr.title === "Interest Rate").value
            )
      );
    default:
      return accounts;
  }
};
const convertAndCompare = (value) => {
  const convertedValue = value.toLowerCase().includes("zero")
    ? 0
    : parseFloat(value.replace(/[^\d.-]/g, ""));
  return isNaN(convertedValue) ? 0 : convertedValue;
};

export default sortAccountTypes;
