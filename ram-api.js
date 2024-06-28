var ramApi = fetch('https://rickandmortyapi.com/api/character/?page=1,2')
  .then((response) => response.json())
  .then((data) => data.results)
  .then((x) => console.log(x));