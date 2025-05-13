function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }
  
  function performSearch(query) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Searching for: "${query}"`;
  }
  
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', debounce(function (e) {
    performSearch(e.target.value);
  }, 500));
    