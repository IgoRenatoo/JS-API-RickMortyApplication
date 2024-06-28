async function fetchAllPages() {
  const baseUrl = 'https://rickandmortyapi.com/api/character/';
  const allResults = [];
  let currentPage = 1;
  let morePages = true;

  while(morePages) {
    try {
      const response = await fetch(`${baseUrl}?page=${currentPage}`);
      const data = await response.json();
      allResults.push(...data.results);
      
      if (data.info.next) {
        currentPage++;
      } else {
        morePages = false;          
      }
    }
    catch(error){  
      console.log(`Erro ao buscar a página ${currentPage}:`, error);
      morePages = false;      
    }
  } return allResults;
}