const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");


const mockData = [
  { title: "Search Result 1", url: "https://example.com/result1" },
  { title: "Search Result 2", url: "https://example.com/result2" },
  { title: "Search Result 3", url: "https://example.com/result3" },
  { title: "Search Result 4", url: "https://example.com/result4" },
  { title: "Search Result 5", url: "https://example.com/result5" }
];

function displayResults(results) {
  searchResults.innerHTML = ""; 
  
  if (results.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No results found";
    searchResults.appendChild(li);
  } else {
    results.forEach(function(result) {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = result.url;
      link.textContent = result.title;
      li.appendChild(link);
      searchResults.appendChild(li);
    });
  }
}

searchInput.addEventListener("input", function() {
  const searchText = searchInput.value.toLowerCase();
  
  const filteredResults = mockData.filter(function(result) {
    return result.title.toLowerCase().includes(searchText);
  });
  
  displayResults(filteredResults)
});
