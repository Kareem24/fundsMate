const url = 'https://asos10.p.rapidapi.com/api/v1/getProductListBySearchTerm?searchTerm=Tomm&currency=USD&country=US&store=US&languageShort=en&sizeSchema=US&limit=50&offset=0';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '264a960087mshe826c34d02f3a77p1932b2jsn5915d1167be9',
    'X-RapidAPI-Host': 'asos10.p.rapidapi.com'
  }
};

try {
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
} catch (error) {
  console.error(error);
}