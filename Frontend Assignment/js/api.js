let productCache = new Map();

async function fetchProducts(limit, skip) {
  // if()
  console.log(skip, limit);
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    );
    let data = await res.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
}

//  Get category list function

async function categoryList() {
  try {
    const res = await fetch("https://dummyjson.com/products/category-list");
    const category = await res.json();
    return category;
  } catch (error) {
    console.log(error.message);
  }
}

categoryList();

//  Get products by thier category

async function categoryListProduct(category) {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`,
    );
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

async function searchProductByTitle(query, limit, skip) {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/search?limit=${limit}&skip=${skip}&q=${query}`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

//  Fetching all the sorted products by thier price
async function getSortedProductsByPrice(value, skip, limit) {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}&sortBy=price&order=${value}`,
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

//  When i am scrolling my fetchProducts and categoryList api is being called multiple time automatically please fix this
