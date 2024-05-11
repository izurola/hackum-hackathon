// Handle form submission
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let keyword = document.getElementById('keyword').value;
    // Perform search and display results
    // Example: fetch(`/search?keyword=${keyword}`).then(response => response.json()).then(data => displayResults(data));
  });
  
  // Display search results
  function displayResults(data) {
    let resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';
    data.forEach(result => {
      let resultElement = document.createElement('div');
      resultElement.textContent = result.title;
      resultsDiv.appendChild(resultElement);
    });
  }
  document.getElementById('searchButton').addEventListener('click', function() {
    let searchTerm = document.getElementById('searchInput').value;
    // Perform search with searchTerm
    console.log('Searching for:', searchTerm);
    // Add your search logic here
});

  