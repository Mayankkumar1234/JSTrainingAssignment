const container = document.querySelector('.container');
const sentinel = document.querySelector('#sentinel');
let currentPage = 1;
const totalPages = 5; // Example total pages available

function loadNextPage() {
    if (currentPage >= totalPages) return;

    currentPage++;
    console.log(`Loading page ${currentPage}`);
    
    // Simulate fetching and adding new content
    const newPage = document.createElement('section');
    newPage.id = `page-${currentPage}`;
    newPage.classList.add('page');
    newPage.innerHTML = `<h1>Page ${currentPage}</h1>`;
    
    // Append before the sentinel
    container.insertBefore(newPage, sentinel); 
    
    // Add a unique color for the new page (example)
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    newPage.style.backgroundColor = randomColor;

    // Optional: add history management or update URL hash here if needed
}

// Set up the Intersection Observer
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log(entries[0])
        loadNextPage();
    }
}, {
    root: container, // Observe within the container
    rootMargin: '0px',
    threshold: 1.0 // Trigger when the entire sentinel is visible
});

// Start observing the sentinel element
observer.observe(sentinel);
