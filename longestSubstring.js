const longestSubstr = (str) => {
  let objlong = {};
  let ArrData = [];
  let length;

  for (let i in str) {
    if (!ArrData.includes(str[i])) {
      console.log(`${str[i]} not found`);
      ArrData.push(str[i]);
    } else {
      console.log(`${str[i]} is found`);
      console.log(ArrData.join(""));
      objlong[ArrData.join("")] = ArrData.join("").length;
      ArrData = [str[i]];
    }
  }
  console.log(ArrData);
  if (!objlong[ArrData.join("")]) {
    objlong[ArrData.join("")] = ArrData.join("").length;
  }
  console.log(objlong);
  length = Object.values(objlong)[0];
  Object.values(objlong).map((i, it) => {
    if (i > length) {
      length = i;
    }
  });
  return `longest string length is ${length}`;
};

console.log(longestSubstr("avsvwanhioppirejbabhyvnmiopwhqabshdhyedydhckpjcfbv"));
