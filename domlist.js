
const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
  };
  
  const domcreation = (arr) => {
    const ulele = document.createElement("ul");
    arr.map((item, index) => {
      const liele = document.createElement("li");
      liele.innerText = `${item.id} -${item.title}`;
      liele.setAttribute("key", index);
      ulele.appendChild(liele);
    });
  
    document.body.appendChild(ulele);
  };
  fetchData().then((r) => {
    console.log(r);
    domcreation(r);
  });