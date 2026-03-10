let productContainer = document.getElementById("prods");
let itemCount = document.getElementById("fav-count");
let categoryContainer = document.getElementById("categoryList");
let priceFilter = document.getElementById("priceFilter");
let searchInput = document.getElementById("searchInput");
let allProducts = [];
let buttonsDisplayed = false;
let count = 0;
let currId;
let itemPerPage = 9;
let total = 0;
let isLoading = false;
let currPage = 0;
let searchQuery = "";

const loadedPages = new Set();

displayCategory();

loadPageData(1);
async function getAllProducts(page) {
  // console.log(total);
  console.log(itemPerPage);
  if (total > 0 && page > total / itemPerPage) return;
  currPage = page;
  // console.log(page);
  const skip = (page - 1) * itemPerPage;
  if (searchQuery.length > 0) {
    fetchedProducts = await searchProductByTitle(
      searchQuery,
      itemPerPage,
      skip,
    );
    allProducts = [];
    displayPagination()
  } else {
    fetchedProducts = await fetchProducts(itemPerPage, skip);
  }
  // console.log(fetchedProducts);
  total = fetchedProducts?.total;
  // console.log(total);
  allProducts = [...allProducts, ...fetchedProducts?.products];

  // console.log(allProducts);
  itemCount.textContent =
    JSON.parse(localStorage.getItem("cartData"))?.length || 0;
  displayProducts(allProducts);
  currId = 1;
  if (!buttonsDisplayed && total > 0) {
    displayPagination();
    // handleCurrPage(1);
    buttonsDisplayed = true;
  }
}

async function loadPageData(page) {
  // console.log(page);
  if (loadedPages.has(page) || isLoading) {
    console.log(`Page ${page} is already loaded`);
    return;
  }
  // console.log("check")
  isLoading = true;
  await getAllProducts(page);
  // displayProducts();

  // Mark this page as loaded
  loadedPages.add(page);
  isLoading = false;
}

async function displayCategory() {
  const categories = await categoryList();
  // console.log(categories);
  categories &&
    categories?.forEach((c) => {
      categoryContainer.innerHTML += `
     <option value="${c}">${c}</option>
     `;
    });
}

let searchTimer;
async function handleSearchInput(query) {
  if (searchTimer) {
    clearTimeout(searchTimer);
  }
  setTimeout(async () => {
    searchQuery = query;

    loadedPages.clear();
    getAllProducts(1);
  }, 800);
}

searchInput.addEventListener("input", (event) => {
  let query = event.target.value;
  console.log(query);
  handleSearchInput(query);
});

categoryContainer.addEventListener("change", async (event) => {
  let category = event.target.value;
  if (category.length === 0) {
    alert("Please select valid category");
    return;
  }
  let data = await categoryListProduct(category);
  console.log(data);
  if (data) {
    total = data?.total;
    displayProducts(data?.products);
    displayPagination();
  }
});

// priceFilter.addEventListener("change", (event) => {
//   const skip = (currPage - 1) * itemPerPage;
//   console.log(itemPerPage);
//   if (event.target.value === "lth") {
//     console.log("Inside low to high");
//     // value, skip, limit
//     console.log(itemPerPage);
//     const data = getSortedProductsByPrice("asc", skip, itemPerPage);
//     total = data.total;
//     allProducts = data.products;
//     displayProducts(allProducts)
//   } else if (event.target.value === "htl") {
//     console.log("Inside hight to low");
//     const data = getSortedProductsByPrice("desc", skip, itemPerPage);
//     total = data.total;
//     allProducts = data.products;
//     displayProducts()
//   } else {
//     return;
//   }
// });
async function displayProducts(products) {
  // console.log(products);
  if (products?.length > 0) {
    productContainer.innerHTML = "";
    products &&
      products?.forEach((product) => {
        // console.log(prod);

        // let div = document.cre

        productContainer.innerHTML += ` <div class="prod">
          <img src=${product.thumbnail} alt="Product Image" />
          <p>${product.title}</p>
          <p>Price : ${product.price}</p>
          <p>Rating :${product.rating}</p>
          <button style="background-color: lime;
    padding: 5px 5px; margin-bottom:5px;
    border: none; border-radius:5px;"  onclick="handleFavourite(${product?.id})" >Add to Card</button>
        </div>
        `;
      });

    // loadedPages.add(page);
  }
}
productContainer.addEventListener("scroll", () => {
  const scrollHeight1 =
    productContainer.scrollHeight -
    productContainer.scrollTop -
    productContainer.clientHeight;
  // console.log("Scroll Height", productContainer.scrollHeight);
  // console.log("main scroll height");
  // console.log("client Height", productContainer.clientHeight);
  // console.log("Scroll Top", productContainer.scrollTop);
  // console.log("Loaded Page", loadedPages);
  // console.log(currId);
  // console.log(productContainer.scrollTop);
  // if(){

  // }

  if (Math.ceil(scrollHeight1) <= 30 && !isLoading) {
    // Find the highest page we have loaded so far
    console.log("scrollHeight1", scrollHeight1);
    let highestLoadedPage = Math.max(...loadedPages);

    // If there are more pages left, load the next one!
    if (highestLoadedPage < total) {
      console.log("Scroll Top", productContainer.scrollTop);
      handleCurrPage(highestLoadedPage + 1);
    }
  }
});

function handleFavourite(idx) {
  let favProd = allProducts.filter((p) => p.id === idx);
  const data = {
    id: favProd[0].id,
    count: 1,
    thumbnail: favProd[0].thumbnail,
    title: favProd[0].title,
    price: favProd[0].price,
    rating: favProd[0].rating,
  };

  let favList = JSON.parse(localStorage.getItem("cartData"));
  if (favList?.length > 0) {
    const checkExists = favList.filter((p) => p.id === idx);
    if (checkExists.length > 0) {
      alert("Item already in the list");
    } else {
      const updatedProducts = [...favList, data];
      localStorage.setItem("cartData", JSON.stringify(updatedProducts));
      itemCount.textContent = updatedProducts.length;
      alert("Product added to favourite");
    }
  } else {
    const updatedProducts = [data];

    localStorage.setItem("cartData", JSON.stringify(updatedProducts));
    alert("Product added to Cart");
    itemCount.textContent = updatedProducts.length;
  }
}

function handleNoOfPages() {
  console.log("Checking...");
  itemPerPage = document.getElementById("inputPage").value;

  console.log(itemPerPage);
  if (itemPerPage < 0 || itemPerPage.toString().length > 2) {
    alert("Please enter the valid number");
    return;
  }

  loadedPages.clear();
  // displayPagination();
  allProducts = [];
  loadPageData(1);
  buttonsDisplayed = false;
}

let timer;
function debounce() { 
  if (timer) { 
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    handleNoOfPages();
  }, 1000);
}
