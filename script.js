document.getElementById('search').addEventListener('click', () => {
    const id = document.getElementById('input-box').value;
    fetchMovies(id);
  })
  
  async function fetchMovies(id){
    const resp = await fetch(`https://swapi.dev/api/films/${id}`);
    const movie = await resp.json();
   
    const result = document.getElementById('result');
    
    if(resp.ok){
    result.style.border = '1px ridge black';
    result.style.backgroundColor ='whitesmoke';
    result.innerHTML = `
      <h1>${movie.title}</h1>      
      <p>Director: ${movie.director}</p>
      <p>Opening Crawl: ${movie.opening_crawl}</p> 
      <p>Release date: ${movie.release_date}</p>`;  
    }
  }