const p11 = new Promise((res, rej) => {
  setTimeout(res, 10, "queen");
});
const p21 = new Promise((res, rej) => {
  setTimeout(res, 210, "king");
});
const p31 = new Promise((res, rej) => {
  setTimeout(res, 130, "servent");
});
const p41 = new Promise((res, rej) => {
  setTimeout(res, 410, "prince");
});
Promise.allSettled([p11, p21, p31, p41])
  .then((z) => {
    console.log(z, "res");
  })
  .catch((er) => {
    console.log(er, "rej");
  });
// Returns all the resolved and rejected values, with the status
// fulfilled or rejected.
