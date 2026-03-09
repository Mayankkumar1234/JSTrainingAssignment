let productContainer = document.getElementById("prods");
let itemCount = document.getElementById("fav-count");
let categoryContainer = document.getElementById("categoryList");
let allProducts = [];
let buttonsDisplayed = false;
let count = 0;
let currId;
let itemPerPage = 9;
let total = 0;

const loadedPages = new Set();

loadPageData(1);
async function getAllProducts(page) {
  // console.log(total);
  console.log(itemPerPage);
  if (total > 0 && page > total / itemPerPage) return;

  // console.log(page);
  const skip = (page - 1) * itemPerPage;
  fetchedProducts = await fetchProducts(itemPerPage, skip);
  // console.log(fetchedProducts);
  total = fetchedProducts?.total;
  // console.log(total);
  allProducts = [...allProducts, ...fetchedProducts?.products];

  console.log(allProducts);
  itemCount.textContent =
    JSON.parse(localStorage.getItem("favProds"))?.length || 0;
  displayProducts(allProducts);
  currId = 1;
  if (!buttonsDisplayed && total > 0) {
    displayPagination();
    buttonsDisplayed = true;
  }
}

async function loadPageData(page) {
  // console.log(page);
  if (loadedPages.has(page)) {
    console.log(`Page ${page} is already loaded`);
    return;
  }
  // console.log("check");
  await getAllProducts(page);

  // displayProducts();

  // Mark this page as loaded
  loadedPages.add(page);
}

displayCategory();
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

function displayCategoryProduct() {
  //  let categoryList = document.querySelectorAll()
}

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
  console.log(productContainer.scrollTop);
  if (Math.ceil(scrollHeight1) <= 1) {
    // Find the highest page we have loaded so far

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
    thumbnail: favProd[0].thumbnail,
    title: favProd[0].title,
    price: favProd[0].price,
    rating: favProd[0].rating,
  };

  let favList = JSON.parse(localStorage.getItem("favProds"));
  if (favList?.length > 0) {
    const checkExists = favList.filter((p) => p.id === idx);
    if (checkExists.length > 0) {
      alert("Item already in the list");
    } else {
      const updatedProducts = [...favList, data];
      localStorage.setItem("favProds", JSON.stringify(updatedProducts));
      itemCount.textContent = updatedProducts.length;
      alert("Product added to favourite");
    }
  } else {
    const updatedProducts = [data];

    localStorage.setItem("favProds", JSON.stringify(updatedProducts));
    alert("Product added to favourite");
    itemCount.textContent = updatedProducts.length;
  }
}

function handleNoOfPages() {
  console.log("Checking...");
  itemPerPage = document.getElementById("inputPage").value;
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
  console.log("Does it working or not?");
  if (timer) {
    console.log("Inside clear interval");
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    handleNoOfPages();
  }, 2000);
}
