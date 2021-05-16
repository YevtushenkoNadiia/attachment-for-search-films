const getData = (url) => fetch(url)
  .then((res) => res.json())
  .then((json) => json.Search);

  const search = 'Iron Man';

  getData(`http://www.omdbapi.com/?apikey=18b8609f&s=${search}`)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
  