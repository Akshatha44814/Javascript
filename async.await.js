const callMe = async () => {
  const resData = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(await resData.json());
};

callMe();
