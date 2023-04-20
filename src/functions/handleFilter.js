const handleFilter = (input, arr, setState) => {
  let regex = new RegExp(input, "i");
  let tokensArrCopy = JSON.parse(JSON.stringify(arr));
  tokensArrCopy = tokensArrCopy.filter((token) => regex.test(token.name));
  setState(tokensArrCopy);
};

export default handleFilter;
