const Promise1 = new Promise((res, rej) => {
  setTimeout(res, 200, "queen");
});

const Promise2 = new Promise((res, rej) => {
  setTimeout(rej, 10, "king");
});
const Promise3 = new Promise((res, rej) => {
  setTimeout(res, 300, "servent");
});
const Promise4 = new Promise((res, rej) => {
  setTimeout(res, 50, "prince");
});
Promise.race([Promise1, Promise2, Promise3, Promise4])
  .then((x) => {
    console.log(x);
  })
  .catch((er) => {
    console.log(er);
  });
//Returns only first resolved or rejected values from the promises.