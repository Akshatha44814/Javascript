const a = [13, 82, 94, 0, 37, 69, 51, 8];

for (let i = 0; i < a.length; i++) {
  if (a[i] < a[i - 1]) {
    let temp = a[i];
    a[i] = a[i - 1];
    a[i - 1] = temp;
    i = -1;
  }
}
console.log(a);

const binarySearch = (arr, val, st, en) => {
  if (st > en) {
    return -1;
  }
  let mid = Math.floor((st + en) / 2);
  if (arr[mid] == val) {
    return mid;
  }
  if (arr[mid] > val) {
    return binarySearch(arr, val, st, mid - 1);
  } else {
    return binarySearch(arr, val, mid + 1, en);
  }
};
console.log(binarySearch(a, 51, 0, a.length - 1));
