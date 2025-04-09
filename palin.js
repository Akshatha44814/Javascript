const palin = (str) => {
  if (str == str.split("").reverse().join("")) {
    return `${str} is palindrome`;
  } else {
    return `${str} is not palindrome`;
  }
};

console.log(palin("akmamka"));
