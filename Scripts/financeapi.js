document.addEventListener('DOMContentLoaded', function() {
  const favoriteStockSymbol = 'NDAQ'; // Replace with your favorite stock symbol
  document.getElementById('stock-symbol').value = favoriteStockSymbol;

  document.getElementById('fetch-stock').addEventListener('click', function() {
      const apiKey = ' 7IFJWKOX8A79IEDB'; // Replace 'demo' with your actual Alpha Vantage API key
      const symbol = document.getElementById('stock-symbol').value.toUpperCase();
      const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              if (data['Global Quote']) {
                  const stockData = data['Global Quote'];
                  document.getElementById('stock-price').innerText = `Price: $${parseFloat(stockData['05. price']).toFixed(2)}`;
                  document.getElementById('stock-change').innerText = `Change: ${stockData['10. change percent']}`;
              } else {
                  document.getElementById('stock-price').innerText = 'Price: Data not available';
                  document.getElementById('stock-change').innerText = 'Change: Data not available';
              }
          })
          .catch(error => console.error('Error fetching stock data:', error));
  });
});